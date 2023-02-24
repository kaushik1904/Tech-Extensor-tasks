import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css'],
})
export class UserlistingComponent {
  data: any;
  isAdmin = false;

  constructor(private service: AuthService) {
    this.service.getAllUsers().subscribe((res) => {
      this.data = res;
    });

    if (this.service.getUserRole() == 'admin') {
      this.isAdmin = true;
    }
  }
}
