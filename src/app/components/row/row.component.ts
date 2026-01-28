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
  @Input() isSearch: boolean = false;
  iconObj: Icon = {
    hash: '',
    name: '',
    imagePreviewUrl: '',
    isFree: false,
    familySlug: '',
    familyName: '',
    categorySlug: '',
    categoryName: '',
    subcategorySlug: '',
    subcategoryName: '',
  };
  list = ['apple', 'mango', 'apple', 'mango', 'apple', 'apple', 'mango'];

  constructor(private iconService : IconServiceService){

  }

  



}
