import { Component, inject, Input } from '@angular/core';
import { Icon, IconResponse } from 'src/models/icon.model';
import { IconServiceService } from 'src/services/icon-service.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styles: [],
})
export class GridComponent {
  isSearch: boolean = false;
  searchIcons: Icon[] = [];
  headings = ['AI', 'Heart', 'Moon', 'Star'];

  constructor(private iconService: IconServiceService) {}

  ngOnInit() {
    this.iconService.icons$.subscribe((newIcons) => {
      this.searchIcons = newIcons;
      this.isSearch = this.searchIcons.length > 0 ? true : false;
    });
  }
}
