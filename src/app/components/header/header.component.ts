import { Component } from '@angular/core';
import { GreetingsComponent } from '../greetings/greetings.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [GreetingsComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDark: boolean;

  constructor() {
    this.isDark = false;
  }

  toggleDark(): void {
    this.isDark = !this.isDark;
  }
}
