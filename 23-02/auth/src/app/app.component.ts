import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  title = 'auth';
  constructor(private router: Router, private service: AuthService) {}

  userName: any;

  isMenuRequried = false;

  ngOnInit() {
    this.service.getUser(sessionStorage.getItem('id')).subscribe((res) => {
      this.userName = res.name;
    });
  }

  ngDoCheck(): void {
    let currentUrl = this.router.url;
    if (currentUrl == '/login' || currentUrl == '/register') {
      this.isMenuRequried = false;
    } else {
      this.isMenuRequried = true;
    }
  }
}
