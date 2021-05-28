import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllItemsComponent } from './get-all-items.component';

describe('GetAllItemsComponent', () => {
  let component: GetAllItemsComponent;
  let fixture: ComponentFixture<GetAllItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
