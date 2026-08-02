import { Component, computed, input } from '@angular/core';

type GenderInfo = {
  label: string;
  icon: string;
};

@Component({
  selector: 'app-author-gender',
  standalone: true,
  template: `
    @if (genderInfo(); as info) {
      <span class="author-gender">
        <i
          [title]="'Gênero ' + info.label"
          [attr.aria-label]="'Ícone de gênero ' + info.label.toLowerCase()"
          class="bi big"
          [class]="'bi big ' + info.icon"
          style="width: 150px;"
        ></i>
      </span>
    }
  `,
  styles: `
    :host { display: inline-flex; }
    .author-gender { align-items: center; display: inline-flex; gap: .4rem; }
    .author-gender .big { color: var(--theme-ink); display: inline-block; font-size: 1.5rem; line-height: 1; }
  `,
})
export class AuthorGenderComponent {
  readonly gender = input('');

  readonly genderInfo = computed<GenderInfo | null>(() => {
    const value = this.gender().trim().toLocaleLowerCase('pt-BR');
    if (['feminino', 'feminina', 'female', 'mulher'].includes(value)) {
      return { label: 'Feminino', icon: 'bi-gender-female' };
    }
    if (['masculino', 'masculina', 'male', 'homem'].includes(value)) {
      return { label: 'Masculino', icon: 'bi-gender-male' };
    }
    if (value) {
      return { label: this.gender().trim(), icon: 'bi-gender-ambiguous' };
    }
    return null;
  });
}
