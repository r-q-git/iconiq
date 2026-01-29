import { Component, Input } from '@angular/core';
import { Icon } from 'src/models/icon.model';
import { IconServiceService } from 'src/services/icon-service.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styles: [],
})
export class RowComponent {
  @Input() heading: string = '';
  iconsArray: Icon[] = [];

  constructor(private iconService: IconServiceService) {}

  ngOnInit() {
    this.iconService
      .getfamilyTrendingIcons(this.heading)
      .subscribe((array) => (this.iconsArray = array.results));
  }
}
