import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent {
  constructor(private service: UserService) {
    this.service.getAllUser().subscribe(
      (res) => {
        this.userData = res.users;
      },
      (err) => console.log(err.error.message)
    );
  }
  userData: User[] = [];
  public data: User[] = [];
}
