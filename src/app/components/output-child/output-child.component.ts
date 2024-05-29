import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-child',
  standalone: true,
  imports: [],
  templateUrl: './output-child.component.html',
  styleUrl: './output-child.component.css',
})
export class OutputChildComponent {
  @Output()
  patata: EventEmitter<string>;

  constructor() {
    this.patata = new EventEmitter<string>();
  }

  emitPatata(): void {
    console.log("Desde el hijo emitimos el evento 'patata'");
    this.patata.emit('Esta es la información que viaja con el evento');
  }
}
