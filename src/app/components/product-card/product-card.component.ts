import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import Product from '../../models/Product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input()
  product: Product;

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      isForSale: true,
      img: '',
    };
  }
}
