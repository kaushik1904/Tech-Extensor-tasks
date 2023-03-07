import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css'],
})
export class OfFromComponent {
  constructor(private service: ServiceService) {}
  ngOnInit() {
    const obj1 = of('kaushik', 'rutvik', 'harsh');

    obj1.subscribe((res) => {
      this.service.print(res, 'ulContainer');
    });

    const obj2 = of({ a: 'kaushik', b: 'rutvik', c: 'harsh' });

    obj2.subscribe((res) => {
      console.log(res);
    });

    const obj3 = from(['kaushik', 'rutvik', 'harsh']);
    obj3.subscribe((res) => {
      this.service.print(res, 'ulContainer2');
    });
  }
}
