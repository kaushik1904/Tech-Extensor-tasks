import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.modul';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private productService: ProductService) {
    this.productService.getAllProducts().subscribe((res) => {
      this.allProduct = res;
    });
  }

  allProduct: Product[] = [];
}
