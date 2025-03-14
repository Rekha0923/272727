import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']); // Navigate to Home page
  }

  goToAbout() {
    this.router.navigate(['/about']); // Navigate to About page
  }
}
