import { Component, EventEmitter, inject, Output } from '@angular/core';
import { IconServiceService } from 'src/services/icon-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  public iconName: string = '';
  iconService: IconServiceService = inject(IconServiceService);

  handleSearch(): void {
    this.iconService.setSearchWord(this.iconName);
  }
}
