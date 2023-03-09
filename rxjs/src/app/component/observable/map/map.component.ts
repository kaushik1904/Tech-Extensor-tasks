import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Subscription, map, from, pluck } from 'rxjs';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  constructor(private service: ServiceService) {}

  subscription: Subscription | undefined;

  ngOnInit() {
    const broadcastVideos = interval(1000);

    this.subscription = broadcastVideos
      .pipe(map((data) => data * 5))
      .subscribe((res) => {
        let value = 'Video ' + res;
        this.service.print(value, 'ulContainer1');
        console.log(res);
        if (res >= 25) {
          this.subscription?.unsubscribe();
        }
      });

    const members = [
      { id: 1, name: 'kaushik' },
      { id: 2, name: 'rutvik' },
      { id: 3, name: 'harsh' },
      { id: 4, name: 'vivek' },
      { id: 5, name: 'mit' },
      { id: 6, name: 'jay' },
    ];

    from(members)
      .pipe(
        // map((data) => data.name.toUpperCase())
        pluck('name')
      )
      .subscribe((res) => {
        console.log(res);
        this.service.print(res, 'ulContainer2');
      });
  }
}
