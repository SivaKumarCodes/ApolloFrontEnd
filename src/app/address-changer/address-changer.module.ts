import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressChangerComponent } from './address-changer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddressChangerComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AddressChangerComponent],
})
export class AddressChangerModule {}
