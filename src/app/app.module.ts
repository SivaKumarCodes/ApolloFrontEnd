import { Injectable, NgModule, isDevMode } from '@angular/core';
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig,
  HammerModule,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
import { UserPageComponent } from './user-page/user-page.component';
import { PopUpLayerComponent } from './pop-up-layer/pop-up-layer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { popUpReducer } from './popUpStore/popUp.reducer';
import { ProductPageModule } from './product-page/product-page.module';
import { ReviewPopupComponent } from './review-popup/review-popup.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  override overrides = {
    pinch: { enable: false },
    rotate: { enable: false },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DropdownComponent,
    AuthDropdownComponent,
    CartPageComponent,
    QuantityPickerComponent,
    AddressChangerComponent,
    UserPageComponent,
    PopUpLayerComponent,
    SidebarComponent,
    ReviewPopupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ProductPageModule,
    HammerModule,
    StoreModule.forRoot({
      products: ProductReducer,
      router: routerReducer,
      auth: AuthenticationReducer,
      cart: cartReducer,
      popup: popUpReducer,
    }),
    EffectsModule.forRoot([ProductEffects, AuthEffects, CartEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
  ],
  exports: [],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
