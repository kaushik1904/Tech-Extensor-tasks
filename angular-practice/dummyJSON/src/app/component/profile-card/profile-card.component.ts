import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent {
  userData: User | undefined;
  constructor(private userService: UserService) {
    this.userService.userProfile.subscribe((res) => {
      console.log('card ' + res);
      // this.userData = res;
    });
  }
}
