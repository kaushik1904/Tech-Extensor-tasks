import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product.modul';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input()
  public product: Product | undefined;
}
