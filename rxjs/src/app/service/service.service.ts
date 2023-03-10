import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  videoEmit = new ReplaySubject<string>(1);

  print(value: string, container: string) {
    let li = document.createElement('li');
    li.innerText = value;
    document.getElementById(container)?.appendChild(li);
  }
}
