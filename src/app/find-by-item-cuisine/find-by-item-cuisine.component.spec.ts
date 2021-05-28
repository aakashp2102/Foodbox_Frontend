import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByItemCuisineComponent } from './find-by-item-cuisine.component';

describe('FindByItemCuisineComponent', () => {
  let component: FindByItemCuisineComponent;
  let fixture: ComponentFixture<FindByItemCuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByItemCuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByItemCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
