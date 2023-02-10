import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css'],
})
export class EmpDetailComponent {
  public employees: any[] = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    // console.log(this._employeeService.getEmployees());
    this.employees = this._employeeService.getEmployees();
  }
}
