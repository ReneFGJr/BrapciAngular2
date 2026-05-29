import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerLivrosComponent } from '../../components/banner-livros/banner-livros.component';
import { BookBtnSubmitModule } from '../../components/book-btn-submit/book-btn-submit.module';
import { BookCarouselComponent } from '../../components/book-carousel/book-carousel.component';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { SearchBookComponent } from '../../components/search-book/search-book.component';

@Component({
  selector: 'app-livros-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BannerLivrosComponent,
    BreadcrumbsComponent,
    BookCarouselComponent,
    BookBtnSubmitModule,
    SearchBookComponent,
  ],
  templateUrl: './livros.page.html',
  styleUrl: './livros.page.scss',
})
export class LivrosPage {}
