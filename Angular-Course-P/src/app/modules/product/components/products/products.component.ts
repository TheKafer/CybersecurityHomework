import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/core/models/product.model';
import { ProductsService } from 'src/app/modules/core/services/products/products.service';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: string) {
    const product = this.products.find((prod) => prod.id === id);
    this.cartService.addCart(product);
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
  createAllProducts() {
    this.productsService.createAllProductsDev().then((res) => {
      this.fetchProducts();
    });
  }
}
