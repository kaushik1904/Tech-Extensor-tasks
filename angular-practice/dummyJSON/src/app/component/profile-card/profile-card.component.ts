import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
})
export class ProfileCardComponent {
  @Input('cardData')
  public userData: User | undefined;
}
