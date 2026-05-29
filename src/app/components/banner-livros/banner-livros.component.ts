import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-banner-livros',
  standalone: true,
  templateUrl: './banner-livros.component.html',
  styleUrl: './banner-livros.component.scss',
})
export class BannerLivrosComponent {
  readonly logoSrc = signal('/assets/img/logo_brapci_livros.png');

  useFallbackLogo(): void {
    this.logoSrc.set('/assets/img/brand_brapci_shadown.png');
  }
}
