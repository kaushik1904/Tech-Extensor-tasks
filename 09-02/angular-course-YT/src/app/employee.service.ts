import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployees() {
    return [
      { id: 1, name: 'kaushik', age: 20 },
      { id: 2, name: 'vivek', age: 21 },
      { id: 3, name: 'jay', age: 22 },
      { id: 4, name: 'harsh', age: 26 },
    ];
  }
}
