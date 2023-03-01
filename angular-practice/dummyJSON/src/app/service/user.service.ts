import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  _url = 'https://dummyjson.com/auth/users';

  getAllUser() {
    return this.http.get(this._url);
  }
}
