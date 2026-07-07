import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accessibility-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="accessibility-panel shadow-lg" role="dialog" aria-label="Painel de acessibilidade">
      <header class="accessibility-panel__header">
        <div>
          <p class="accessibility-panel__eyebrow">Acessibilidade</p>
          <h2 class="accessibility-panel__title">Ajustes rápidos</h2>
        </div>
        <button type="button" class="accessibility-panel__close" (click)="close.emit()" aria-label="Fechar painel">
          <span aria-hidden="true">×</span>
        </button>
      </header>

      <div class="accessibility-panel__section">
        <div class="accessibility-panel__section-head">
          <strong>Tamanho da fonte</strong>
          <span>{{ (fontScale * 100) | number:'1.0-0' }}%</span>
        </div>
        <div class="accessibility-panel__button-row">
          @for (option of fontOptions; track option.value) {
            <button
              type="button"
              class="accessibility-panel__chip"
              [class.is-active]="fontScale === option.value"
              (click)="setFontScale(option.value)"
            >
              {{ option.label }}
            </button>
          }
        </div>
      </div>

      <div class="accessibility-panel__section">
        <div class="accessibility-panel__section-head">
          <strong>Tema escuro</strong>
          <span>{{ darkMode ? 'Ativo' : 'Inativo' }}</span>
        </div>
        <button type="button" class="accessibility-panel__toggle" [class.is-active]="darkMode" (click)="toggleDarkMode()">
          {{ darkMode ? 'Desativar modo dark' : 'Entrar no modo dark' }}
        </button>
      </div>

      <div class="accessibility-panel__section">
        <button type="button" class="accessibility-panel__toggle" [class.is-active]="letterSpacing" (click)="toggleLetterSpacing()">
          Aumentar espaçamento das letras
        </button>
      </div>

      <div class="accessibility-panel__section">
        <button type="button" class="accessibility-panel__toggle" [class.is-active]="cursorLarge" (click)="toggleCursorLarge()">
          Aumentar tamanho do cursor
        </button>
      </div>

      <div class="accessibility-panel__section">
        <button type="button" class="accessibility-panel__toggle" [class.is-active]="highlights" (click)="toggleHighlights()">
          Destacar headings H1-H6
        </button>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .accessibility-panel {
        background: var(--theme-card-bg);
        border: 1px solid var(--theme-line);
        border-radius: 1rem;
        color: var(--theme-ink);
        padding: 1rem;
        position: absolute;
        right: 0;
        top: calc(100% + 0.75rem);
        width: min(320px, 92vw);
        z-index: 1060;
      }

      .accessibility-panel__header {
        align-items: flex-start;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      .accessibility-panel__eyebrow {
        color: var(--theme-muted);
        font-size: 0.72rem;
        letter-spacing: 0.12rem;
        margin: 0 0 0.15rem;
        text-transform: uppercase;
      }

      .accessibility-panel__title {
        font-family: 'Bitter', Georgia, serif;
        font-size: 1.2rem;
        margin: 0;
      }

      .accessibility-panel__close,
      .accessibility-panel__chip,
      .accessibility-panel__toggle {
        border: 1px solid var(--theme-line);
        border-radius: 0.8rem;
        transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
      }

      .accessibility-panel__close {
        align-items: center;
        background: transparent;
        color: var(--theme-ink);
        display: inline-flex;
        height: 2rem;
        justify-content: center;
        width: 2rem;
      }

      .accessibility-panel__close:hover,
      .accessibility-panel__close:focus-visible,
      .accessibility-panel__chip:hover,
      .accessibility-panel__chip:focus-visible,
      .accessibility-panel__toggle:hover,
      .accessibility-panel__toggle:focus-visible {
        background: var(--theme-sand);
        border-color: var(--theme-hint);
        transform: translateY(-1px);
      }

      .accessibility-panel__section {
        display: grid;
        gap: 0.55rem;
        margin-bottom: 0.95rem;
      }

      .accessibility-panel__section:last-child {
        margin-bottom: 0;
      }

      .accessibility-panel__section-head {
        align-items: center;
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
        font-size: 0.9rem;
      }

      .accessibility-panel__button-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }

      .accessibility-panel__chip,
      .accessibility-panel__toggle {
        background: transparent;
        color: var(--theme-ink);
        font-size: 0.92rem;
        padding: 0.55rem 0.7rem;
        text-align: left;
      }

      .accessibility-panel__chip.is-active,
      .accessibility-panel__toggle.is-active {
        background: var(--theme-ink);
        border-color: var(--theme-ink);
        color: var(--theme-paper);
      }

      .accessibility-panel__toggle {
        width: 100%;
      }

      @media (max-width: 991.98px) {
        .accessibility-panel {
          right: auto;
          left: 0;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessibilityPanelComponent {
  @Input() fontScale = 1;
  @Input() letterSpacing = false;
  @Input() cursorLarge = false;
  @Input() highlights = false;
  @Input() darkMode = false;

  @Output() close = new EventEmitter<void>();
  @Output() fontScaleChange = new EventEmitter<number>();
  @Output() letterSpacingChange = new EventEmitter<boolean>();
  @Output() cursorLargeChange = new EventEmitter<boolean>();
  @Output() highlightsChange = new EventEmitter<boolean>();
  @Output() darkModeChange = new EventEmitter<boolean>();

  readonly fontOptions = [
    { label: 'Normal', value: 1 },
    { label: 'Grande', value: 2 },
    { label: 'Gigante', value: 4 }
  ];

  setFontScale(scale: number): void {
    this.fontScaleChange.emit(scale);
  }

  toggleLetterSpacing(): void {
    this.letterSpacingChange.emit(!this.letterSpacing);
  }

  toggleCursorLarge(): void {
    this.cursorLargeChange.emit(!this.cursorLarge);
  }

  toggleHighlights(): void {
    this.highlightsChange.emit(!this.highlights);
  }

  toggleDarkMode(): void {
    this.darkModeChange.emit(!this.darkMode);
  }
}
