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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockCopyPasteDirective } from './block-copy-paste/block-copy-paste.directive';
import { ElementStylerDirective } from './element-styler/element-styler.directive';
import { AddProductComponent } from './add-product/add-product.component';
import { AddAdContainerComponent } from './add-ad-container/add-ad-container.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

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
    BlockCopyPasteDirective,
    ElementStylerDirective,
    AddProductComponent,
    AddAdContainerComponent,
    BestsellersComponent,
    MobilesComponent,
    CustomerServiceComponent,
    HomeComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
