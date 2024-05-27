import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css',
})
export class CountryComponent {
  @Input()
  myCountry: string = '';

  @Output()
  sendMsg: EventEmitter<string>;

  constructor() {
    this.sendMsg = new EventEmitter<string>;
  }

  emitSendMsg(): void {
    this.sendMsg.emit("Me encanta este pais");
  }
}
