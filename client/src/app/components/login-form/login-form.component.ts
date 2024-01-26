import { Component, ViewChild } from '@angular/core';
import { User } from '../../models/login';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { NgForm } from '@angular/forms';
import { RecaptchaComponent } from 'ng-recaptcha';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @ViewChild('userLoginForm', { static: false }) userLoginForm!: NgForm;
  @ViewChild('captchaRef') public captchaRef!: RecaptchaComponent;

  captcha: string = "";

  userModel = new User('', '');
  errorMessage = "";

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  resolved(response: string | null) {
    this.captcha = response ?? "";
  }

  onSubmit() {
    this.errorMessage = "";

    if (!this.userLoginForm.valid || !this.captcha)
      return;

    this.authenticationService.login(this.userModel).subscribe((user) => {
      this.router.navigate(['/dashboard']);
    }, (error) => {
      this.errorMessage = error.error;
      this.captchaRef.reset();
    });
  }
}
