import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  print(value: string) {
    let li = document.createElement('li');
    li.innerText = value;
    document.getElementById('ulContainer')?.appendChild(li);
  }
}
