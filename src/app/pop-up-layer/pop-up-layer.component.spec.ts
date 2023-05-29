import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpLayerComponent } from './pop-up-layer.component';

describe('PopUpLayerComponent', () => {
  let component: PopUpLayerComponent;
  let fixture: ComponentFixture<PopUpLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
