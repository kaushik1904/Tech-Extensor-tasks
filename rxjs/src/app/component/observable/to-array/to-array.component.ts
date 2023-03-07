import { Component } from '@angular/core';
import { of, toArray } from 'rxjs';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css'],
})
export class ToArrayComponent {
  constructor(private service: ServiceService) {}

  ngOnInit() {
    const obj1 = of('kaushik', 'rutvik', 'harsh');

    obj1.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
