import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-search-boolean',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './search-boolean.component.html',
  styleUrls: ['./search-boolean.component.scss']
})
export class SearchBooleanComponent {
  strategy = '';

  searchBoolean() {
    // Lógica de busca booleana
    console.log('Pesquisar por:', this.strategy);
  }
}
