import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Enviroment
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // In case that all products get deleted on the api
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers2',
      price: 80000,
      description: 'bla bla bla bla bla',
    },
  ];

  constructor(private http: HttpClient) {
    console.log('Constructor Products Service');
    // this.createAllProductsDev();
  }

  getAllProducts() {
    return this.http
      .get<any>(`${environment.url_api}/products`)
      .pipe(map((res) => res['products']));
  }

  getProduct(id: string) {
    // return this.products.find((item) => id === item.id);
    return this.http
      .get<any>(`${environment.url_api}/products/${id}`)
      .pipe(map((res) => res['product']));
  }

  createAllProductsDev() {
    let promisesArr: Promise<any>[] = [];
    this.products.forEach((product) => {
      promisesArr.push(this.createProduct2(product));
    });
    return Promise.all(promisesArr);
  }

  // CRUD

  createProduct(product: any) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  createProduct2(product: Product) {
    return this.http
      .post(`${environment.url_api}/products`, product)
      .toPromise();
  }

  updateProduct(id: string, changes: any) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
