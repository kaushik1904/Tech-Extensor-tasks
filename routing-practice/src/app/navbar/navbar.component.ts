import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private route: Router) {}

  goHome() {
    this.route.navigate(['/home']);
  }

  goAbout() {
    this.route.navigate(['/about']);
  }

  goContact() {
    this.route.navigate(['/contact']);
  }

}
