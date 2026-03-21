import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AuthPanelComponent } from '../auth-panel/auth-panel.component';

@Component({
  selector: 'app-auth-signin',
  imports: [CommonModule, TranslateModule, AuthPanelComponent],
  templateUrl: './auth-signin.component.html',
  styleUrl: './auth-signin.component.scss'
})
export class AuthSigninComponent {}
