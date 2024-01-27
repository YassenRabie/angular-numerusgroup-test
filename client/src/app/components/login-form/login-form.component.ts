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
  // View child for accessing the userLoginForm NgForm
  @ViewChild('userLoginForm', { static: false }) userLoginForm!: NgForm;

  // View child for accessing the Recaptcha component
  @ViewChild('captchaRef') public captchaRef!: RecaptchaComponent;

  // Property to store the captcha response
  captcha: string = "";

  // Model for user login information
  userModel = new User('', '');

  // Variable to store error messages
  errorMessage: string = "";

  // Variable to check if form is submitting
  isSubmitting: boolean = false;

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

    this.isSubmitting = true;

    this.authenticationService.login(this.userModel).subscribe((user) => {
      this.router.navigate(['/dashboard']);
    }, (error) => {
      this.isSubmitting = false;
      this.errorMessage = error.error;
      this.captchaRef.reset();
    });
  }
}
