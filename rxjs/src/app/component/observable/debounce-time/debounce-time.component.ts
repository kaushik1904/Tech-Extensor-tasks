import { Component, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, map, debounceTime, distinctUntilChanged } from 'rxjs';
import { User } from '../model/User.component';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css'],
})
export class DebounceTimeComponent {
  @ViewChild('myInput1') myInput1!: ElementRef;
  @ViewChild('myInput2') myInput2!: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    const serach = fromEvent<User>(this.myInput1.nativeElement, 'keyup').pipe(
      map((data) => data.target.value),
      debounceTime(500)
    );

    serach.subscribe((res) => {
      console.log(res);
    });

    const serach2 = fromEvent<User>(this.myInput2.nativeElement, 'keyup').pipe(
      map((data) => data.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    );

    serach2.subscribe((res) => {
      console.log(res);
    });
  }
}
