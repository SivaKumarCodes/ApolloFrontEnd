import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressChangerComponent } from './address-changer.component';

describe('AddressChangerComponent', () => {
  let component: AddressChangerComponent;
  let fixture: ComponentFixture<AddressChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
