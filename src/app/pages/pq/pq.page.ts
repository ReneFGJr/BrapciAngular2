import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-pq-page',
  standalone: true,
  imports: [CommonModule, TranslateModule, BreadcrumbsComponent],
  templateUrl: './pq.page.html',
  styleUrl: './pq.page.scss',
})
export class PqPage {}
