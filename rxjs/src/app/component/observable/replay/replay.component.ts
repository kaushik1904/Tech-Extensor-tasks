import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css'],
})
export class ReplayComponent {
  userList1 = ['video1', 'video2', 'video3'];
  userList2 = [''];
  userList3 = [];
  subscribeMode2: boolean = false;
  subscribeMode3: boolean = false;

  subscription2: Subscription | undefined;

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.service.videoEmit.subscribe((res) => {
      this.userList1.push(res);
    });
  }
  addVideo(value: string) {
    this.service.videoEmit.next(value);
  }

  userSubscribe2() {
    if (this.subscribeMode2) {
      this.subscription2?.unsubscribe();
    } else {
      this.subscription2 = this.service.videoEmit.subscribe((res) => {
        this.userList2.push(res);
      });
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }
  userSubscribe3() {
    this.subscribeMode3 = !this.subscribeMode3;
  }
}
