import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  _url = 'https://dummyjson.com/auth/users';

  userSearchData = new BehaviorSubject<User[]>([]);
  userProfile = new BehaviorSubject<User|null>(null);

  getAllUser() {
    return this.http.get<any>(this._url);
  }

  getUserData(id: string | null) {
    return this.http.get<User>(this._url + '/' + id);
  }

  searchUser(name: string) {
    return this.http
      .get<{ users: User[] }>(`${this._url}/search?q=${name}`)
      .pipe(
        map((res) => {
          this.userSearchData.next(res.users);
          return res.users;
        })
      );
  }
}
