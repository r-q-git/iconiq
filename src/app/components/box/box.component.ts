import { Component, Input } from '@angular/core';
import { Icon } from 'src/models/icon.model';
import { IconServiceService } from 'src/services/icon-service.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styles: [],
})
export class BoxComponent {
  svgUrl: string = '';

  @Input() iconObj: Icon = {
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

  constructor(private iconService: IconServiceService) {}

  onDownloadButton(hash: string, name:string ) {
    this.iconService.getSvgUrl(hash).subscribe(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name}.svg`;
    a.click();
    window.URL.revokeObjectURL(url);
  });
  }
}
