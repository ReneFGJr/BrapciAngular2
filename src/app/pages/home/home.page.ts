import { Component } from '@angular/core';
import { HomeSearchComponent } from '../../components/home-search/home-search.component';

@Component({
  selector: 'app-home-page',
  imports: [HomeSearchComponent],
  template: '<app-home-search></app-home-search>'
})
export class HomePage {}
