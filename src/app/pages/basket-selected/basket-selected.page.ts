import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketService } from '../../core/services/basket.service';

@Component({
  selector: 'app-basket-selected',
  templateUrl: './basket-selected.page.html',
  standalone: true,
  imports: [CommonModule],
})
export class BasketSelectedPage {
  basket = inject(BasketService);
  markedIds = this.basket.getMarked();
}
