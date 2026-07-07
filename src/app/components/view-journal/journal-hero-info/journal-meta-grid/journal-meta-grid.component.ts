import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-journal-meta-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './journal-meta-grid.component.html',
  styleUrl: './journal-meta-grid.component.scss'
})
export class JournalMetaGridComponent {
  @Input() coverUrl = '-';
  @Input() issnPortalUrl = '-';
  @Input() title = '-';
  @Input() acronym = '-';
  @Input() issn = '-';
  @Input() eissn = '-';
  @Input() period = '-';
  @Input() publisher = '-';
  @Input() collection = '-';
  @Input() journalId = '-';
  @Input() url = '-';
  @Input() oaiUrl = '-';
}
