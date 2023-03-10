import { Component } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css'],
})
export class MergeComponent {
  constructor(private service: ServiceService) {}

  ngOnInit() {
    const techInterval = interval(1500).pipe(
      take(5),
      map((d) => 'Tech Video #' + ++d)
    );
    const comedyInterval = interval(1700).pipe(
      take(3),
      map((d) => 'Comedy Video #' + ++d)
    );
    const newsInterval = interval(1000).pipe(
      take(4),
      map((d) => 'NEWS Video #' + ++d)
    );

    const finalObs = merge(techInterval, comedyInterval, newsInterval);

    finalObs.subscribe((res) => {
      console.log(res);
      this.service.print(res, 'ulContainer');
    });
  }
}
