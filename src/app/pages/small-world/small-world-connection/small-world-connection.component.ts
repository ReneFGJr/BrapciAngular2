import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type SmallWorldPathNode = {
  step: number;
  node: string;
};

export type SmallWorldResult = {
  path: SmallWorldPathNode[];
  distance: number;
  origin: string;
  target: string;
};

@Component({
  selector: 'app-small-world-connection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-world-connection.component.html',
  styleUrl: './small-world-connection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallWorldConnectionComponent {
  @Input({ required: true }) data!: SmallWorldResult;

  nodeRole(index: number): string {
    if (index === 0) return 'Origem';
    if (index === this.data.path.length - 1) return 'Destino';
    return 'Conexão';
  }
}
