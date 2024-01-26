import { Component, ViewChild } from '@angular/core';
import { User } from '../../models/login';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  @ViewChild('userLoginForm', { static: false }) userLoginForm!: NgForm;

  userModel = new User('', '');
  errorMessage = "";

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  onSubmit() {
    this.errorMessage = "";

    if (!this.userLoginForm.valid)
      return;

    const user = this.authenticationService.login(this.userModel.username, this.userModel.password);

    if (user.user) {
      this.router.navigate(['/dashboard']);
      return;
    }

    this.errorMessage = user.error;
  }

  newHero() {
    // this.model = new User(42, '', '');
  }
}
