import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { filter, from } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  constructor(private service: ServiceService) {}

  ngOnInit() {
    const members = [
      { id: 1, name: 'kaushik', gender: 'Male' },
      { id: 2, name: 'rutvik', gender: 'Male' },
      { id: 3, name: 'kajal', gender: 'Female' },
      { id: 4, name: 'janki', gender: 'Female' },
      { id: 5, name: 'harsh', gender: 'Male' },
      { id: 6, name: 'vivek', gender: 'Male' },
      { id: 7, name: 'mit', gender: 'Male' },
      { id: 8, name: 'jay', gender: 'Male' },
      { id: 9, name: 'krishna', gender: 'Female' },
      { id: 10, name: 'hetal', gender: 'Female' },
    ];

    from(members)
      .pipe(filter((data) => data.id < 6))
      .subscribe((res) => {
        console.log(res);
        this.service.print(res.name, 'ulContainer1');
      });

    from(members)
      .pipe(filter((data) => data.gender == 'Male'))
      .subscribe((res) => {
        console.log(res);
        let value = res.name + ' Gender : ' + res.gender;
        this.service.print(value, 'ulContainer2');
      });
  }
}
