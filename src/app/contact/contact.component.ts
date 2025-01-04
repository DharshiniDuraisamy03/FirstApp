import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private router: Router) {}
  home() {
    this.router.navigate(['home']);
  }
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
}
