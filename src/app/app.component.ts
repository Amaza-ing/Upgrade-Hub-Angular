import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    HeaderComponent,
    ProductCardComponent,
    UserFormComponent,
    ProductListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  personName: string;
  personAge: number;
  isFromMadrid: boolean;
  inputPlaceholder: string;
  myId: string;
  showProduct: boolean;

  constructor() {
    this.personName = 'Adrián';
    this.personAge = 33;
    this.isFromMadrid = false;
    this.inputPlaceholder = 'Nombre de usuario';
    this.myId = 'patata';
    this.showProduct = false;
  }

  cleanPersonName(): void {
    this.personName = '';
  }
}
