import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { BrapciApiService } from '../../core/services/brapci-api.service';

type JsonRecord = Record<string, unknown>;

interface RdfData extends JsonRecord {
  id_d: string;
  ID: string;
  ID2: string;
  id_c: string;
  id_n: string;
  c_class: string;
  n_name: string;
  n_lang: string;
}

interface RdfProperty {
  property: string;
  IDp: string;
  Allow: JsonRecord;
  Data: RdfData[];
}

interface RdfGroup {
  key: string;
  properties: RdfProperty[];
}

type EditorMode = 'concept' | 'literal' | 'image' | 'file';

interface EditorState {
  groupIndex: number;
  propertyIndex: number;
  dataIndex: number | null;
  mode: EditorMode;
  draft: RdfData;
}

interface DeleteState {
  groupIndex: number;
  propertyIndex: number;
  dataIndex: number;
  data: RdfData;
}

interface RdfEditorResponse {
  concept: JsonRecord;
  groups: string[];
  form: Record<string, RdfProperty[]>;
  status?: string;
}

@Component({
  selector: 'app-admin-edit-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, TranslateModule],
  templateUrl: './admin-edit.page.html',
  styleUrl: './admin-edit.page.scss',
})
export class AdminEditPage {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly api = inject(BrapciApiService);
  private readonly auth = inject(AuthService);

  readonly id = signal('');
  readonly concept = signal<JsonRecord>({});
  readonly groups = signal<RdfGroup[]>([]);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly error = signal('');
  readonly success = signal(false);
  readonly editor = signal<EditorState | null>(null);
  readonly deleteTarget = signal<DeleteState | null>(null);
  readonly deleting = signal(false);
  readonly uploading = signal(false);
  readonly selectedFile = signal<File | null>(null);

  readonly conceptFields = ['n_name', 'n_lang', 'c_class', 'cc_status'] as const;

  constructor() {
    this.route.paramMap.pipe(
      map((params) => params.get('id')?.trim() ?? ''),
      distinctUntilChanged(),
      tap((id) => { this.id.set(id); this.loading.set(true); this.error.set(''); this.success.set(false); }),
      filter(Boolean),
      switchMap((id) => this.api.get<RdfEditorResponse>(`rdf/a/${id}`)),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe({
      next: (response) => this.applyResponse(response),
      error: () => { this.error.set('adminEdit.errors.load'); this.loading.set(false); },
    });
  }

  private applyResponse(response: RdfEditorResponse): void {
    this.concept.set({ ...response.concept });
    const order = response.groups?.length ? response.groups : Object.keys(response.form ?? {});
    this.groups.set(order.map((key) => ({
      key,
      properties: (response.form?.[key] ?? []).map((property) => ({
        ...property,
        Allow: { ...(property.Allow ?? {}) },
        Data: (property.Data ?? []).map((data) => ({ ...data })),
      })),
    })));
    this.loading.set(false);
  }

  private refreshData(): void {
    this.api.get<RdfEditorResponse>(`rdf/a/${this.id()}`)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response) => this.applyResponse(response),
        error: () => this.error.set('adminEdit.errors.load'),
      });
  }

  conceptValue(field: string): string {
    return String(this.concept()[field] ?? '');
  }

  updateConcept(field: string, value: string): void {
    this.concept.update((concept) => ({ ...concept, [field]: value }));
    this.markChanged();
  }

  updateData(groupIndex: number, propertyIndex: number, dataIndex: number, field: 'ID' | 'n_name' | 'n_lang', value: string): void {
    this.groups.update((groups) => groups.map((group, gi) => gi !== groupIndex ? group : ({
      ...group,
      properties: group.properties.map((property, pi) => pi !== propertyIndex ? property : ({
        ...property,
        Data: property.Data.map((data, di) => di === dataIndex ? { ...data, [field]: value } : data),
      })),
    })));
    this.markChanged();
  }

  openNew(groupIndex: number, propertyIndex: number): void {
    const property = this.groups()[groupIndex].properties[propertyIndex];
    const allow = property.Allow ?? {};
    const mode: EditorMode = allow['imagem'] || allow['cover']
      ? 'image'
      : allow['pdf']
        ? 'file'
        : allow['literal']
          ? 'literal'
          : 'concept';
    this.editor.set({
      groupIndex,
      propertyIndex,
      dataIndex: null,
      mode,
      draft: { id_d: '', ID: this.id(), ID2: this.id(), id_c: property.IDp, id_n: '', c_class: property.property, n_name: '', n_lang: 'nn' },
    });
    this.selectedFile.set(null);
  }

  openEdit(groupIndex: number, propertyIndex: number, dataIndex: number): void {
    const property = this.groups()[groupIndex].properties[propertyIndex];
    const allow = property.Allow ?? {};
    const mode: EditorMode = allow['imagem'] || allow['cover'] ? 'image' : allow['pdf'] ? 'file' : allow['literal'] ? 'literal' : 'concept';
    this.editor.set({ groupIndex, propertyIndex, dataIndex, mode, draft: { ...property.Data[dataIndex] } });
    this.selectedFile.set(null);
  }

  closeEditor(): void {
    this.editor.set(null);
    this.selectedFile.set(null);
  }

  updateDraft(field: 'ID' | 'n_name' | 'n_lang', value: string): void {
    this.editor.update((state) => state ? { ...state, draft: { ...state.draft, [field]: value } } : null);
  }

  selectFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedFile.set(input.files?.[0] ?? null);
  }

  confirmEditor(): void {
    const state = this.editor();
    if (!state) return;
    if (state.mode === 'literal') {
      const isNew = state.dataIndex === null;
      const endpoint = isNew ? 'rdf/dataAddLiteral' : `rdf/updateLiteral/${state.draft.id_n}`;
      const payload = isNew
        ? { q: state.draft.n_name, prop: state.draft.c_class, ID: state.draft.ID || this.id() }
        : { q: state.draft.n_name, prop: state.draft.c_class, ID: state.draft.ID };
      this.uploading.set(true);
      this.api.post(endpoint, payload).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: () => { this.uploading.set(false); this.closeEditor(); this.refreshData(); },
        error: () => { this.uploading.set(false); this.error.set('adminEdit.errors.save'); },
      });
      return;
    }
    const file = this.selectedFile();
    if ((state.mode === 'image' || state.mode === 'file') && file) {
      const payload = new FormData();
      payload.append('file', file);
      payload.append('ID', this.id());
      payload.append('IDp', state.draft.id_c);
      payload.append('type', state.mode === 'image' ? 'bookCover' : 'file');
      this.uploading.set(true);
      this.api.post<unknown>('tools/upload', payload).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (response) => {
          const result = response && typeof response === 'object' ? response as JsonRecord : {};
          const uploadedName = String(result['filename'] ?? result['file'] ?? result['name'] ?? file.name);
          this.applyEditor({ ...state.draft, n_name: uploadedName });
          this.uploading.set(false);
        },
        error: () => { this.uploading.set(false); this.error.set('adminEdit.errors.upload'); },
      });
      return;
    }
    this.applyEditor(state.draft);
  }

  requestDelete(groupIndex: number, propertyIndex: number, dataIndex: number): void {
    const data = this.groups()[groupIndex].properties[propertyIndex].Data[dataIndex];
    this.deleteTarget.set({ groupIndex, propertyIndex, dataIndex, data });
  }

  cancelDelete(): void {
    this.deleteTarget.set(null);
  }

  confirmDelete(): void {
    const target = this.deleteTarget();
    if (!target || this.deleting()) return;
    if (!target.data.id_d) {
      this.removeAt(target.groupIndex, target.propertyIndex, target.dataIndex);
      this.deleteTarget.set(null);
      return;
    }
    this.deleting.set(true);
    this.api.post(`rdf/delData/${target.data.id_d}`, {}).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.removeAt(target.groupIndex, target.propertyIndex, target.dataIndex);
        this.deleting.set(false);
        this.deleteTarget.set(null);
        this.refreshData();
      },
      error: () => { this.deleting.set(false); this.error.set('adminEdit.errors.delete'); },
    });
  }

  private applyEditor(data: RdfData): void {
    const state = this.editor();
    if (!state) return;
    this.groups.update((groups) => groups.map((group, gi) => gi !== state.groupIndex ? group : ({
      ...group,
      properties: group.properties.map((property, pi) => pi !== state.propertyIndex ? property : ({
        ...property,
        Data: state.dataIndex === null ? [...property.Data, data] : property.Data.map((item, di) => di === state.dataIndex ? data : item),
      })),
    })));
    this.closeEditor();
    this.markChanged();
  }

  private removeAt(groupIndex: number, propertyIndex: number, dataIndex: number): void {
    this.groups.update((groups) => groups.map((group, gi) => gi !== groupIndex ? group : ({
      ...group,
      properties: group.properties.map((property, pi) => pi !== propertyIndex ? property : ({ ...property, Data: property.Data.filter((_, di) => di !== dataIndex) })),
    })));
    this.markChanged();
  }
  save(): void {
    if (this.saving()) return;
    const form = Object.fromEntries(this.groups().map((group) => [group.key, group.properties]));
    this.saving.set(true); this.error.set(''); this.success.set(false);
    this.api.post(`rdf/a/${this.id()}`, {
      token: this.auth.user?.token ?? this.auth.getLocalUser()?.token,
      concept: this.concept(),
      groups: this.groups().map((group) => group.key),
      form,
    }).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => { this.saving.set(false); this.success.set(true); },
      error: () => { this.saving.set(false); this.error.set('adminEdit.errors.save'); },
    });
  }

  private markChanged(): void {
    this.success.set(false);
    this.error.set('');
  }
}