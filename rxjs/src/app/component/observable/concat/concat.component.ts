import { Component } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css'],
})
export class ConcatComponent {
  constructor(private service: ServiceService) {}

  ngOnInit() {
    const techInterval = interval(1000).pipe(
      take(5),
      map((d) => 'Tech Video #' + ++d)
    );
    const comedyInterval = interval(1000).pipe(
      take(3),
      map((d) => 'Comedy Video #' + ++d)
    );
    const newsInterval = interval(1000).pipe(
      take(4),
      map((d) => 'NEWS Video #' + ++d)
    );

    const finalObs = concat(techInterval, comedyInterval, newsInterval);

    finalObs.subscribe((res) => {
      console.log(res);
      this.service.print(res, 'ulContainer');
    });
  }
}
