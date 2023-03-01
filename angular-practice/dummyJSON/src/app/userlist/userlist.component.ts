import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent {
  constructor(private service: UserService) {
    this.service.getAllUser().subscribe(
      (res) => {
        console.log(res);
        this.usersData = res;
      },
      (err) => console.log(err.error.message)
    );
  }
  usersData: any;
}
