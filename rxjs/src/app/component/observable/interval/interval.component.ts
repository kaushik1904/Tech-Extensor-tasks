import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent {
  videoSubscription: Subscription | undefined;

  constructor(private service: ServiceService) {}

  ngOnInit() {
    const broadCastingVideos = interval(300);

    this.videoSubscription = broadCastingVideos.subscribe((res) => {
      let value = 'Video ' + ++res;
      this.service.print(value);
      if (res >= 5) {
        this.videoSubscription?.unsubscribe();
      }
    });
  }
}
