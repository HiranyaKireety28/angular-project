import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TwoColAdComponent } from './two-col-ads/two-col-ad.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { OneAdCarouselComponent } from './one-ad-carousel/one-ad-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { MatCardModule } from '@angular/material/card';
import { DetailsComponent } from './details/details.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component'
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DayDatePipe } from './day-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    TwoColAdComponent,
    CarouselComponent,
    SlideShowComponent,
    OneAdCarouselComponent,
    DetailsComponent,
    ShippingDetailsComponent,
    ProductComponent,
    ProductDetailsComponent,
    DayDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
