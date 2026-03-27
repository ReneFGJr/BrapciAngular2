import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-tools-text-page',
  imports: [CommonModule, TranslateModule, BreadcrumbsComponent],
  templateUrl: './tools-text.page.html',
  styleUrl: './tools-text.page.scss'
})
export class ToolsTextPage {}
