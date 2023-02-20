import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent {
  constructor(private router: ActivatedRoute, private emp: EmployeeService) {}

  public users: any[] = [];

  public userId: any;
  ngOnInit() {
    this.userId = this.router.snapshot.params['id'];

    this.emp.getData().subscribe((res) => (this.users = res));
  }
}
