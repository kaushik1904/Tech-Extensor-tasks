import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private userService: UserService) {
    this.userId = sessionStorage.getItem('id');
    this.userService.getUserData(this.userId).subscribe(
      (res) => {
        // this.userData = res;
        console.log(res);
        this.userService.userProfile.next(res);
        // this.userService.userProfile.subscribe((res) => {
        //   console.log(res);
        // });
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
  userId: string | null;
  // userData: User | undefined;
}
