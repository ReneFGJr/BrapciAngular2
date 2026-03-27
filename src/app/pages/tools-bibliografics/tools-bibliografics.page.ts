import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-tools-bibliografics-page',
  imports: [CommonModule, TranslateModule, BreadcrumbsComponent],
  templateUrl: './tools-bibliografics.page.html',
  styleUrl: './tools-bibliografics.page.scss'
})
export class ToolsBibliograficsPage {}
