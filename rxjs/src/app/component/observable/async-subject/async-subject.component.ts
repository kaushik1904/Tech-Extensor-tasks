import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css'],
})
export class AsyncSubjectComponent {
  constructor(private service: ServiceService) {}

  asyncVideoEmit: string | undefined;
  ngOnInit() {
    this.service.asyncSubjectEmit.subscribe((res) => {
      this.asyncVideoEmit = res;
    });
  }

  addVideo(value: string) {
    this.service.asyncSubjectEmit.next(value);
    console.log(value);
  }

  onComplete() {
    this.service.asyncSubjectEmit.complete();
  }
}
