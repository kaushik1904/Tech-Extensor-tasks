import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestoService {
  _url = ' http://localhost:3000/restaurants';

  constructor(private http: HttpClient) {}

  getLists() {
    return this.http.get(this._url);
  }
}
