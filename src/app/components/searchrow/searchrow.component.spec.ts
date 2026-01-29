import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrowComponent } from './searchrow.component';

describe('SearchrowComponent', () => {
  let component: SearchrowComponent;
  let fixture: ComponentFixture<SearchrowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchrowComponent]
    });
    fixture = TestBed.createComponent(SearchrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
