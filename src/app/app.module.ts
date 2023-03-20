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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BatchComponent,
    DropdownComponent,
    AuthDropdownComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    StoreModule.forRoot({
      products: ProductReducer,
      router: routerReducer,
      auth: AuthenticationReducer,
      cart: cartReducer,
    }),
    EffectsModule.forRoot([ProductEffects, AuthEffects]),
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
