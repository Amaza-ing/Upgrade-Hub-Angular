import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import Product from './models/Product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  personName: string;
  personAge: number;
  isFromMadrid: boolean;
  computer: Product;
  inputPlaceholder: string;

  constructor() {
    this.personName = 'Adrián';
    this.personAge = 33;
    this.isFromMadrid = false;
    this.inputPlaceholder = 'Compra este producto';

    this.computer = {
      id: 1,
      name: 'Computer',
      price: 1000,
      isForSale: true,
      img: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg',
    };
  }
}
