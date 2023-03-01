import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  _url = 'https://dummyjson.com/auth/login';

  login(data: any) {
    return this.http.post<any>(this._url, {
      username: data.name,
      password: data.password,
    });
  }

  getToken() {
    return sessionStorage.getItem('token') != null
      ? sessionStorage.getItem('token')
      : '';
  }
}
