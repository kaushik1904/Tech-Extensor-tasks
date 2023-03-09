import { Component } from '@angular/core';
import {
  from,
  interval,
  map,
  Subscription,
  take,
  takeLast,
  takeUntil,
  timer,
} from 'rxjs';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent {
  constructor(private service: ServiceService) {}

  subscription: Subscription | undefined;

  ngOnInit() {
    const arr = [
      'kaushik',
      'jay',
      'rutvik',
      'vivek',
      'harsh',
      'mit',
      'ronak',
      'darshil',
      'sahil1',
      'sahil2',
    ];
    const source = interval(1000);
    const name = from(arr);
    let condition = timer(6000);
    name.pipe(take(5)).subscribe((res) => {
      this.service.print(res, 'ulContainer1');
    });

    name.pipe(takeLast(5)).subscribe((res) => {
      this.service.print(res, 'ulContainer2');
    });

    source
      .pipe(
        map((e) => arr[e]),
        takeUntil(condition)
      )
      .subscribe((res) => {
        this.service.print(res, 'ulContainer3');
      });
  }
}
