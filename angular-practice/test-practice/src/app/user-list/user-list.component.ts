import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  public data: any[] = [];

  constructor(private emp: EmployeeService) {}

  ngOnInit() {
    this.emp.getData().subscribe((res) => (this.data = res));
  }
}
