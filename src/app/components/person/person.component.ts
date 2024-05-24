import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  personName: string;
  personAge: number;
  isFromMadrid: boolean;
  inputPlaceholder: string;
  myId: string;

  constructor() {
    this.personName = 'Adrián';
    this.personAge = 33;
    this.isFromMadrid = false;
    this.inputPlaceholder = 'Nombre de usuario';
    this.myId = 'patata';
  }

  cleanPersonName(): void {
    this.personName = '';
  }
}
