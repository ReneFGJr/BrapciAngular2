import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-image-editor',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <label for="rdf-file" class="form-label">{{ (mode === 'image' ? 'adminEdit.selectImage' : 'adminEdit.selectFile') | translate }}</label>
    <input id="rdf-file" class="form-control" type="file" [accept]="mode === 'image' ? 'image/*' : undefined" (change)="fileChange.emit($event)" />
    <p *ngIf="draft['n_name']" class="small text-secondary mt-2">{{ 'adminEdit.currentFile' | translate }}: {{ draft['n_name'] }}</p>
  `,
})
export class AdminImageEditorComponent {
  @Input({ required: true }) mode!: 'image' | 'file';
  @Input({ required: true }) draft!: Record<string, unknown>;
  @Output() readonly fileChange = new EventEmitter<Event>();
}
