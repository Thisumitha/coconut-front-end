import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsPageComponent
  },
  {
    path: "checkout",
    component: CheckoutPageComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];
