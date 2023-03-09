import { Component } from '@angular/core';
import { interval, Subscription, map, tap } from 'rxjs';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent {
  constructor(private service: ServiceService) {}

  subscription: Subscription | undefined;

  ngOnInit() {
    const timer = interval(1000);
    const arr = ['kaushik', 'jay', 'rutvik', 'vivek', 'harsh'];

    this.subscription = timer
      .pipe(
        tap((res) => {
          if (res == 4) {
            this.subscription?.unsubscribe();
          }
        }),
        map((res) => arr[res])
      )
      .subscribe((res) => {
        this.service.print(res,'ulContainer1')
      });
  }
}
