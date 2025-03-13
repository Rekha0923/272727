import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']); // Navigate to Home page
  }

  goToContact() {
    this.router.navigate(['/contact']); // Navigate to Contact page
  }
}
