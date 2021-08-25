import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  mySwiper: Swiper;
  constructor() {
    let aaa = 'HolaMundo';
    console.log(aaa.split('').reverse().join(''));
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container');
  }
}
