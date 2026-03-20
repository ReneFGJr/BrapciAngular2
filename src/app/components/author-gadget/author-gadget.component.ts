import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BarChartComponent, BarChartPoint } from '../bar-chart/bar-chart.component';

type AuthorMetric = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-author-gadget',
  imports: [CommonModule, BarChartComponent],
  templateUrl: './author-gadget.component.html',
  styleUrl: './author-gadget.component.scss'
})
export class AuthorGadgetComponent {
  @Input({ required: true }) name = '-';
  @Input({ required: true }) nameAbnt = '-';
  @Input({ required: true }) authorId = '-';
  @Input({ required: true }) metrics: AuthorMetric[] = [];
  @Input() chartPoints: BarChartPoint[] = [];
}
