import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { UploadFileComponent } from '../../components/upload-file/upload-file.component';

@Component({
  selector: 'app-livros-submit-page',
  standalone: true,
  imports: [CommonModule, BreadcrumbsComponent, UploadFileComponent],
  templateUrl: './livros-submit.page.html',
  styleUrl: './livros-submit.page.scss',
})
export class LivrosSubmitPage {}
