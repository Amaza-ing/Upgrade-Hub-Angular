import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PersonComponent } from './components/person/person.component';
import { CountryComponent } from './components/country/country.component';
import { OutputParentComponent } from './components/output-parent/output-parent.component';
import User from './models/User';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserFormComponent,
    ProductListComponent,
    PersonComponent,
    FormsModule,
    CountryComponent,
    OutputParentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showProducts: boolean;
  countryVariable: string;
  username: string;

  constructor() {
    this.showProducts = true;
    this.countryVariable = 'España';
    this.username = '';
  }

  showMsg(msg: string): void {
    console.log(msg);
  }

  login(user: User): void {
    console.log('Desde el padre: ', user);
    this.username = user.userName;
  }
}
