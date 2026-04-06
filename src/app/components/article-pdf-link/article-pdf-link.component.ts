import { CommonModule } from '@angular/common';
import { Component, Input, computed } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-article-pdf-link',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './article-pdf-link.component.html',
  styleUrl: './article-pdf-link.component.scss'
})
export class ArticlePdfLinkComponent {
  @Input({ required: true }) pdfUrl: string = '';
  @Input() articleId: string | null = null;
  @Input() articleTitle: string = '';
  @Input() articleAuthors: string = '';
  @Input() articleKeywords: string = '';

  copyLinkSuccess = false;
  readonly linkedInImageUrl = 'https://cip.brapci.inf.br/img/linkedin.png';
  readonly linkedInFallbackImageUrl =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='3' fill='%230A66C2'/%3E%3Cpath fill='white' d='M7.15 8.3A1.35 1.35 0 1 1 7.15 5.6a1.35 1.35 0 0 1 0 2.7ZM5.95 18.4h2.4V9.6h-2.4v8.8Zm4.1 0h2.3v-4.7c0-1.2.25-2.35 1.74-2.35 1.47 0 1.49 1.38 1.49 2.44v4.6h2.4v-5.1c0-2.5-.53-4.43-3.46-4.43-1.4 0-2.34.77-2.73 1.5h-.04v-1.28h-2.2c.03.83 0 8.8 0 8.8Z'/%3E%3C/svg%3E";

  // Generate the article view URL
  readonly articleViewUrl = computed(() => {
    if (!this.articleId) return '';
    // Remove the signal tracking by returning the computed value
    return `https://brapci.inf.br/v/${this.articleId}`;
  });

  copyToClipboard(): void {
    // Prefer article URL, fall back to PDF URL
    const urlToCopy = this.articleViewUrl() || this.pdfUrl;
    if (!urlToCopy) return;

    navigator.clipboard.writeText(urlToCopy).then(() => {
      this.copyLinkSuccess = true;
      // Reset feedback after 2 seconds
      setTimeout(() => {
        this.copyLinkSuccess = false;
      }, 2000);
    }).catch((err) => {
      console.error('Failed to copy URL:', err);
    });
  }

  shareOnWhatsApp(): void {
    // Prefer article URL, fall back to PDF URL
    const urlToShare = this.articleViewUrl() || this.pdfUrl;
    if (!urlToShare) return;

    const message = encodeURIComponent(`Check this article: ${urlToShare}`);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }

  shareOnInstagram(): void {
    // Instagram web does not support direct prefilled share URLs.
    // Open Instagram and keep URL copy/share available in other actions.
    window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');
  }

  shareOnLinkedIn(): void {
    const urlToShare = this.articleViewUrl() || this.pdfUrl;
    if (!urlToShare) return;

    const title = this.articleTitle?.trim();
    const authors = this.articleAuthors?.trim();
    const keywords = this.articleKeywords?.trim();

    const summaryParts: string[] = [];
    if (authors) {
      summaryParts.push(`Autores: ${authors}`);
    }
    if (keywords) {
      summaryParts.push(`Palavras-chave: ${keywords}`);
    }

    const params = new URLSearchParams({
      mini: 'true',
      url: urlToShare,
      source: 'Brapci',
      image: this.linkedInImageUrl,
    });

    if (title) {
      params.set('title', title);
    }

    if (summaryParts.length > 0) {
      params.set('summary', summaryParts.join(' | '));
    }

    const linkedInUrl = `https://www.linkedin.com/shareArticle?${params.toString()}`;
    window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
  }

  onLinkedInImageError(event: Event): void {
    const image = event.target as HTMLImageElement | null;
    if (!image) {
      return;
    }

    if (image.src !== this.linkedInFallbackImageUrl) {
      image.src = this.linkedInFallbackImageUrl;
    }
  }

  downloadPdf(): void {
    if (!this.pdfUrl) return;

    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = this.pdfUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
