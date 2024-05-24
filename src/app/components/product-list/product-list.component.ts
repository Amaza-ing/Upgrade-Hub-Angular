import { Component } from '@angular/core';
import Product from '../../models/Product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Computer',
        price: 1000,
        isForSale: true,
        img: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg',
      },
      {
        id: 2,
        name: 'Television',
        price: 500,
        isForSale: false,
        img: 'https://www.esferize.com/wp-content/uploads/2021/11/metaball_3d-retro-tv-2.jpg',
      },
      {
        id: 3,
        name: 'keyboard',
        price: 40,
        isForSale: true,
        img: 'https://m.media-amazon.com/images/I/61w09t-kNuL._AC_UF894,1000_QL80_.jpg',
      },
    ];
  }
}
