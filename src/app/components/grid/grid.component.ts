import { Component, inject, Input } from '@angular/core';
import { Icon, IconResponse } from 'src/models/icon.model';
import { IconServiceService } from 'src/services/icon-service.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styles: [],
})
export class GridComponent {
  searchIcons: Icon[] = [];
  list = ["AI", "Computer", "Heart", "Moon"]

  constructor(private iconService: IconServiceService) {}




}
