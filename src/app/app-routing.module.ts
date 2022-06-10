import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { HomeComponent } from './home/home.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { OneAdCarouselComponent } from './one-ad-carousel/one-ad-carousel.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'bestsellers',
    component: BestsellersComponent,
    children:[
      {
        path:'carousel',
        component: OneAdCarouselComponent,
      }
    ]
  },
  {
    path: 'mobiles',
    component: MobilesComponent,
  },
  {
    path: 'customer-service',
    component: CustomerServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
