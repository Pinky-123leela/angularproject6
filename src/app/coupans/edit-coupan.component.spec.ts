import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoupanComponent } from './edit-coupan.component';

describe('EditCoupanComponent', () => {
  let component: EditCoupanComponent;
  let fixture: ComponentFixture<EditCoupanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCoupanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoupanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
