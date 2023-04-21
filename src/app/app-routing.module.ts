import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './pages/home/components/product/product.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'produit/:id',
    component: ProductComponent,
  },
  

  { path: '', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
