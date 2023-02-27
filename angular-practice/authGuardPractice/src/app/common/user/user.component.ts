import { Component } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private service: ServiceService) {
    this.service.getAllUsers().subscribe((res) => {
      this.userData = res;
    });
    if (this.service.getUserRole() == 'Admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }
  userData: any;
  isAdmin: any;
  hobbyValue: any;
}
