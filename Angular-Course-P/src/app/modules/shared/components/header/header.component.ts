import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  total$: Observable<number>;

  constructor(private cartService: CartService) {
    this.total$ = this.cartService.cart$.pipe(map((prod) => prod.length));
  }
}
