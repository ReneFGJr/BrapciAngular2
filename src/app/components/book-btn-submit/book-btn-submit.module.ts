import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookBtnSubmitComponent } from './book-btn-submit.component';

@NgModule({
  imports: [CommonModule, BookBtnSubmitComponent],
  exports: [BookBtnSubmitComponent],
})
export class BookBtnSubmitModule {}
