import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchArticlesComponent } from '../search-articles/search-articles.component';

@Component({
  selector: 'app-home-search',
  imports: [CommonModule, SearchArticlesComponent],
  templateUrl: './home-search.component.html',
  styleUrl: './home-search.component.scss',
})
export class HomeSearchComponent {}
