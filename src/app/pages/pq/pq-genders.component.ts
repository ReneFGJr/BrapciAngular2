import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { PqApplications } from './pq-applications.component';
import { GENDERS, GenderScholar, genderCounts, genderHistory } from './pq-gender-data';

@Component({
  selector: 'app-pq-genders', standalone: true, imports: [CommonModule],
  templateUrl: './pq-genders.component.html', styleUrl: './pq-genders.component.scss',
})
export class PqGendersComponent {
  private readonly activeRecords = signal<GenderScholar[]>([]);
  private readonly allRecords = signal<GenderScholar[]>([]);
  private readonly applications = signal<PqApplications>({});
  @Input() set active(value: GenderScholar[]) { this.activeRecords.set(value); }
  @Input() set all(value: GenderScholar[]) { this.allRecords.set(value); }
  @Input() set history(value: PqApplications | null | undefined) { this.applications.set(value || {}); }
  readonly legend = GENDERS;
  readonly summaries = computed(() => [
    { title: 'Bolsistas ativos', subtitle: 'Bolsistas com bolsa vigente', ...genderCounts(this.activeRecords()) },
    { title: 'Todos os bolsistas', subtitle: 'Ativos e inativos no histórico disponível', ...genderCounts(this.allRecords()) },
  ]);
  readonly years = computed(() => {
    const records: GenderScholar[] = [...this.activeRecords()];
    for (const year of Object.values(this.applications())) {
      for (const item of [...(year.novas || []), ...(year.reconcedidas || []), ...(year.novas_apos_interrupcao || [])]) {
        records.push({ bs_nome: item.nome, bs_genero: item.bs_genero, bs_start: item.inicio, bs_finish: item.fim });
      }
    }
    return genderHistory(records, Number(new Intl.DateTimeFormat('en', { year: 'numeric', timeZone: 'America/Sao_Paulo' }).format(new Date())), this.activeRecords());
  });
}
