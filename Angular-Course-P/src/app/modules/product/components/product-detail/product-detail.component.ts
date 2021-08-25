import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/modules/core/models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe((product) => {
      this.product = product;
    });
  }

  createProduct() {
    let p: Product = {
      id: '60',
      image: 'assets/images/stickers2.png',
      title: 'Nuevo Producto',
      price: 40000,
      description: 'pla pla pla pla pla',
    };
    this.productsService
      .createProduct(p)
      .subscribe((product) => console.log(product));
  }

  updateProduct() {
    let p: Partial<Product> = {
      price: 7777,
      description: 'Edición',
    };
    this.productsService
      .updateProduct('3', p)
      .subscribe((product) => console.log(product));
  }

  deleteProduct() {
    this.productsService
      .deleteProduct('3')
      .subscribe((response) => console.log(response));
  }
}
