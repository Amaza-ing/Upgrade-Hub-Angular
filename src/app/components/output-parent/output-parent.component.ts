import { Component } from '@angular/core';
import { OutputChildComponent } from '../output-child/output-child.component';

@Component({
  selector: 'app-output-parent',
  standalone: true,
  imports: [OutputChildComponent],
  templateUrl: './output-parent.component.html',
  styleUrl: './output-parent.component.css'
})
export class OutputParentComponent {
  handlePatata(str: string): void {
    console.log("Desde el padre recibimos la información");
    console.log(str);
  }
}
