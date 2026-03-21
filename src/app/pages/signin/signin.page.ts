import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AuthSigninComponent } from '../../components/auth-signin/auth-signin.component';

@Component({
  selector: 'app-signin-page',
  imports: [CommonModule, TranslateModule, AuthSigninComponent],
  templateUrl: './signin.page.html',
  styleUrl: './signin.page.scss'
})
export class SigninPage {}
