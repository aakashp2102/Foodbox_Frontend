import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteByItemIdComponent } from './delete-by-item-id.component';

describe('DeleteByItemIdComponent', () => {
  let component: DeleteByItemIdComponent;
  let fixture: ComponentFixture<DeleteByItemIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteByItemIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteByItemIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
