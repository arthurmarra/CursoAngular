import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellPageComponent } from './pages/sell-page/sell-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    SellPageComponent,
    DetailsPageComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule
  ],
  exports: [
    SellPageComponent,
    DetailsPageComponent,
    ProductsComponent
  ]
})
export class SellModule { }
