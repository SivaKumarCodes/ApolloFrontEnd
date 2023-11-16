import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileProductBatchComponent } from './mobile-product-batch.component';

describe('MobileProductBatchComponent', () => {
  let component: MobileProductBatchComponent;
  let fixture: ComponentFixture<MobileProductBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileProductBatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileProductBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
