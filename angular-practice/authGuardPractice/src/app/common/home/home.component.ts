import { Component } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private service: ServiceService) {
    this.userId = sessionStorage.getItem('id');
    this.service.getUser(this.userId).subscribe((res) => (this.userData = res));
  }
  userId: any;
  userData: any;
}
