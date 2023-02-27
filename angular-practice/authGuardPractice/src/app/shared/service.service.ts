import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
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

  updateUserData(data: any, id: any) {
    return this.http.put(this._url + '/' + id, data);
  }

  getUserRole() {
    return sessionStorage.getItem('role') != null
      ? sessionStorage.getItem('role')?.toString()
      : '';
  }

  isLoggedIn() {
    return sessionStorage.getItem('id') != null;
  }
}
