import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookGadgetComponent } from '../book-gadget/book-gadget.component';

@Component({
  selector: 'app-book-panel',
  standalone: true,
  imports: [CommonModule, BookGadgetComponent],
  templateUrl: './book-panel.component.html',
  styleUrl: './book-panel.component.scss',
})
export class BookPanelComponent {
  @Input() bookId = '';
  @Input() cover = '';
  @Input() title = '';
  @Input() data: Record<string, unknown> | null = null;
  @Input() open = false;
  @Output() closed = new EventEmitter<void>();

  close(): void {
    this.closed.emit();
  }
}
