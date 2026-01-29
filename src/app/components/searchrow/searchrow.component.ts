import { Component, Input } from '@angular/core';
import { Icon } from 'src/models/icon.model';
import { IconServiceService } from 'src/services/icon-service.service';

@Component({
  selector: 'app-searchrow',
  templateUrl: './searchrow.component.html',
})
export class SearchrowComponent {
  @Input() heading: string = '';
  iconsArray: Icon[] = [];

  constructor(private iconService: IconServiceService) {}

  ngOnInit() {
    if (this.heading !== '') {
      this.iconService
        .getIconBySearch(this.heading)
        .subscribe((array) => (this.iconsArray = array.results));
    }
  }

  handleSearchWindowCloseButton() {
    
    this.iconService.isSearch.next(false);
    this.iconService.searchWord.next("");
  }
}
