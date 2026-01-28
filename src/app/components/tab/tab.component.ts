import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styles: [
  ]
})
export class TabComponent {
  @Input() tab = "";
}
