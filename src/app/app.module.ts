import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BatchComponent } from './slider/batch/batch.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductReducer } from './store/app.reducer';
import { ProductEffects } from './store/app.effects';
import { DropdownComponent } from './dropdown/dropdown.component';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './store/customSerializer';
import { AuthEffects } from './authStore/auth.effects';
import { AuthenticationReducer } from './authStore/auth.reducer';
import { AuthDropdownComponent } from './auth-dropdown/auth-dropdown.component';
import { cartReducer } from './cartStore/cart.reducer';
import { CartEffects } from './cartStore/cart.effects';
import { CartPageComponent } from './cart-page/cart-page.component';
import { QuantityPickerComponent } from './quantity-picker/quantity-picker.component';
import { AddressChangerComponent } from './address-changer/address-changer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { UserPageComponent } from './user-page/user-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BatchComponent,
    DropdownComponent,
    AuthDropdownComponent,
    CartPageComponent,
    QuantityPickerComponent,
    AddressChangerComponent,
    LoadingComponent,
    UserPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    StoreModule.forRoot({
      products: ProductReducer,
      router: routerReducer,
      auth: AuthenticationReducer,
      cart: cartReducer,
    }),
    EffectsModule.forRoot([ProductEffects, AuthEffects, CartEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
