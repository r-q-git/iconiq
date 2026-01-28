import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styles: [
  ]
})
export class RowComponent {
  @Input() heading:string = "";
  list = ["apple", "mango","apple", "mango","apple", "apple", "mango"]
}
