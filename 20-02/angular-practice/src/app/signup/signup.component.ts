import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private router: Router) {}

  userModel = new User('', '', '');

  public users: any[] = [];

  getData() {
    console.log(this.userModel);
    this.users.push(this.userModel);
    console.log(this.users);
    this.router.navigate(['/welcome-page/' + this.userModel.userName]);
  }
}
