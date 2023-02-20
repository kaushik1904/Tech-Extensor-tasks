import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './../employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  _url = '/assets/data/data.json';

  getData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this._url);
  }
}
