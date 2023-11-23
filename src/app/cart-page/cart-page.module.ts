import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddressChangerModule } from '../address-changer/address-changer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductPageModule } from '../product-page/product-page.module';
import { LoadingModule } from '../loading/loading.module';
import { RouterModule } from '@angular/router';
import { CartPageRoutingModule } from './cart-page-routing.module';

@NgModule({
  declarations: [CartPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CartPageRoutingModule,
    RouterModule,
    FontAwesomeModule,
    AddressChangerModule,
    LoadingModule,
  ],
  exports: [CartPageComponent],
})
export class CartPageModule {}
