import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css'],
})
export class DepartmentDetailComponent {
  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // let id: any = this.route.snapshot.paramMap.get('id');
    // this.departmentId = +id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id: any = params.get('id');
      this.departmentId = +id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }
}
