import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent {
  departments = [
    { id: 1, name: 'angular' },
    { id: 2, name: '.net' },
    { id: 3, name: 'Reactjs' },
  ];
  constructor(private router: Router) {}


  ngOnInit() {}

  onSelect(department: any) {
    this.router.navigate(['/departments', department.id]);
  }
}
