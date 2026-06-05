import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CitedSearchComponent } from '../../components/cited-search/cited-search.component';

@Component({
  selector: 'app-cited-page',
  standalone: true,
  imports: [CommonModule, TranslateModule, CitedSearchComponent],
  templateUrl: './cited.page.html',
  styleUrl: './cited.page.scss',
})
export class CitedPage {}
