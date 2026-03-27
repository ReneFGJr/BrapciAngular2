import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-tools-bibliometric-page',
  imports: [CommonModule, TranslateModule, BreadcrumbsComponent],
  templateUrl: './tools-bibliometric.page.html',
  styleUrl: './tools-bibliometric.page.scss'
})
export class ToolsBibliometricPage {}
