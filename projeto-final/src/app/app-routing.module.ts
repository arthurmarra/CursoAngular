import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { ProductsComponent } from './features/sell/components/products/products.component';
import { DetailsPageComponent } from './features/sell/pages/details-page/details-page.component';
import { SellPageComponent } from './features/sell/pages/sell-page/sell-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'sell', component: SellPageComponent},
  {path: 'details-page/:productId', component: DetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
