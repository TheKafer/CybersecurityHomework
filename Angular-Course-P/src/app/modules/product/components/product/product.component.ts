import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  DoCheck,
} from '@angular/core';

import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy, DoCheck {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<string>;

  today = new Date();

  constructor() {
    this.productClicked = new EventEmitter();
    // console.log('1. Constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('2 .onChanges');
  //   console.log(changes);
  // }

  ngOnInit() {
    // console.log('3. onInit');
  }

  ngDoCheck() {
    // console.log('4. DoCheck');
  }

  ngOnDestroy() {
    // console.log('5. onDestroy');
  }

  addCart() {
    this.productClicked.emit(this.product.id);
  }
}
