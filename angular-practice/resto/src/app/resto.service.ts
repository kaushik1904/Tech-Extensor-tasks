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

  saveResto(data: any) {
    // console.log(data);
    return this.http.post(this._url, data);
  }

  removeResto(id: any) {
    return this.http.delete(`${this._url}/${id}`);
  }

  getSelectedResto(id: any) {
    return this.http.get<any>(`${this._url}/${id}`);
  }

  updateData(id: any, data: any) {
    return this.http.put(`${this._url}/${id}`, data);
  }
}
