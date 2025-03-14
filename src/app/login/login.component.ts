import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
class LoginComponent {
  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  about() {
    this.router.navigate(['about']);
  }
  services() {
    this.router.navigate(['service']);
  }
  projects() {
    this.router.navigate(['projects']);
  }
  contact() {
    this.router.navigate(['contact']);
  }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = 'Username is required';
    } else if (this.password.trim().length === 0) {
      this.errorMsg = 'Password is required';
    } else {
      this.errorMsg = '';
      let res = this.auth.login(this.username, this.password);
      if (res == 200) {
        this.router.navigate(['home']);
      }
      if (res == 403) {
        this.errorMsg = 'Invalid Credentials';
      }
    }
  }
}
