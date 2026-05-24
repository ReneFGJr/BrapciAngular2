import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ArticleGadgetComponent } from '../article-gadget/article-gadget.component';

type ProceedingMetric = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-proceeding-gadget',
  imports: [CommonModule, ArticleGadgetComponent],
  templateUrl: './proceeding-gadget.component.html',
  styleUrl: './proceeding-gadget.component.scss',
})
export class ProceedingGadgetComponent {
  @Input({ required: true }) data: unknown = null;
  @Input() metrics: ProceedingMetric[] = [];
  @Input() dataTag: unknown = null;
}
