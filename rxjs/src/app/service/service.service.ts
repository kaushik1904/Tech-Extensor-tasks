import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  print(value: string, container: string) {
    let li = document.createElement('li');
    li.innerText = value;
    document.getElementById(container)?.appendChild(li);
  }
}
