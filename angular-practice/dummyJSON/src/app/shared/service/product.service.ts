import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Product } from 'src/app/model/product.modul';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = new BehaviorSubject<Product[]>([]);
  constructor(private http: HttpClient) {}

  _url = 'https://dummyjson.com/products';

  getAllProducts() {
    return this.http
      .get<{ products: Product[] }>(this._url)
      .pipe(map((res) =>res.products));
  }
}
