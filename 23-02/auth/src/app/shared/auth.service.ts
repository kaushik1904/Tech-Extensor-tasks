import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  _url = 'http://localhost:3000/user';

  getAllUsers() {
    return this.http.get<any>(this._url);
  }

  getUser(id: any) {
    return this.http.get<any>(this._url + '/' + id);
  }

  addUser(data: any) {
    return this.http.post(this._url, data);
  }

  updateUserData(id: any,data:any) {
    return this.http.put(this._url + '/' + id,data);
  }

  isLoggedIn() {
    return sessionStorage.getItem('id') != null;
  }

  getUserRole() {
    return sessionStorage.getItem('userRole') != null
      ? sessionStorage.getItem('userRole')?.toString()
      : '';
  }
}
