import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-doc-page',
  imports: [CommonModule, BreadcrumbsComponent],
  templateUrl: './doc.page.html',
  styleUrl: './doc.page.scss'
})
export class DocPage {}
