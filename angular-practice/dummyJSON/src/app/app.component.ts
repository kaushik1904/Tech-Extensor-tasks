import { Component } from '@angular/core';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dummyJSON';
  constructor(private service: AuthService) {}

  ngDoCheck() {
    if (this.service.getToken() != '') {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }
  isLogin: any;
}
