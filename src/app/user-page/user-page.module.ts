import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingModule } from '../loading/loading.module';
import { AddressChangerModule } from '../address-changer/address-changer.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserPageRoutingModule } from './user-page-routing.module';

@NgModule({
  declarations: [UserPageComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule,
    UserPageRoutingModule,
    LoadingModule,
    AddressChangerModule,
  ],
})
export class UserPageModule {}
