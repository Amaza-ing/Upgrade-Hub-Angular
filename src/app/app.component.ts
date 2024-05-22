import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HeaderComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  personName: string;
  personAge: number;
  isFromMadrid: boolean;
  inputPlaceholder: string;
  myId: string;

  constructor() {
    this.personName = '';
    this.personAge = 33;
    this.isFromMadrid = false;
    this.inputPlaceholder = 'Nombre de usuario';
    this.myId = "patata";
  }

  cleanPersonName(): void {
    this.personName = "";
  }
}
