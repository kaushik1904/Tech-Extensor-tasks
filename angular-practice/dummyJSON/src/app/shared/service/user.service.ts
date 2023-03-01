import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  _url = 'https://dummyjson.com/auth/users';

  getAllUser() {
    return this.http.get<any>(this._url);
  }

  getUserData(id: string | null) {
    return this.http.get<User>(this._url + '/' + id);
  }
}
