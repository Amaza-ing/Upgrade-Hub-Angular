import { Component } from '@angular/core';
import User from '../../models/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  user: User;

  constructor() {
    this.user = {
      userName: '',
      email: '',
      password: '',
    };
  }

  handleLogin(e: Event): void {
    e.preventDefault();

    const pass = 'myPassword';

    if (this.user.password === pass) {
      console.log('El usuario ha hecho login: ', this.user);
    } else {
      console.log('La contraseña es incorrecta');
    }
  }
}
