import { Component } from '@angular/core';
import { IconServiceService } from 'src/services/icon-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: [],
})
export class BodyComponent {
  isSearch: boolean = false;
  searchWord: string = '';

  constructor(private iconService: IconServiceService) {}
  ngOnInit() {
    this.iconService.isSearch$.subscribe((value) => (this.isSearch = value));
    this.iconService.searchWord$.subscribe(
      (value) => (this.searchWord = value),
    );
  }
}
