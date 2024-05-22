import { Component } from '@angular/core';
import Product from '../../models/Product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  computer: Product;

  constructor() {
    this.computer = {
      id: 1,
      name: 'Computer',
      price: 1000,
      isForSale: true,
      img: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg',
    };
  }
}
