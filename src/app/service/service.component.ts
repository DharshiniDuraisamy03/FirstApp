import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
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
