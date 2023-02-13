import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent {
  public selectedId: any;

  departments = [
    { id: 1, name: 'angular' },
    { id: 2, name: '.net' },
    { id: 3, name: 'Reactjs' },
  ];
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id: any = params.get('id');
      this.selectedId = +id;
    });
  }

  onSelect(department: any) {
    this.router.navigate(['/departments', department.id]);
  }

  isSelected(department: any) {
    return department.id == this.selectedId;
  }
}
