import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByItemIdComponent } from './find-by-item-id.component';

describe('FindByItemIdComponent', () => {
  let component: FindByItemIdComponent;
  let fixture: ComponentFixture<FindByItemIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindByItemIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByItemIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
