import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { BannerLivrosComponent } from '../../components/banner-livros/banner-livros.component';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { UploadFileComponent } from '../../components/upload-file/upload-file.component';

@Component({
  selector: 'app-livros-submit-page',
  standalone: true,
  imports: [BannerLivrosComponent, CommonModule, BreadcrumbsComponent, UploadFileComponent],
  templateUrl: './livros-submit.page.html',
  styleUrl: './livros-submit.page.scss',
})
export class LivrosSubmitPage {
  readonly acceptedTerms = signal([false, false, false]);

  setTerm(index: number, event: Event): void {
    const accepted = (event.target as HTMLInputElement).checked;
    this.acceptedTerms.update((terms) => terms.map((value, i) => i === index ? accepted : value));
  }

  allTermsAccepted(): boolean {
    return this.acceptedTerms().every(Boolean);
  }
}
