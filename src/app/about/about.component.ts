import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private router: Router) {}

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
