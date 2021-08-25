import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products/products.service';
import { CartService } from './services/cart/cart.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ProductsService, CartService, AuthService],
})
export class CoreModule {}
