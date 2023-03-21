import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterProductComponent } from './register-product/register-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'register', component: RegisterProductComponent },
  { path: '', component: LandingComponent },
  { path: 'signup', component:SignupComponent},
  { path: 'login', component:LoginComponent},
  { path: 'search', component:SearchComponent},
  { 
    path: 'cart', 
  
    component:CartComponent},
  {
    path: 'detail/:id', 
    component: ProductDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
