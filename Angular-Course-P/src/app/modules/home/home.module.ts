import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [HomeComponent, BannerComponent],
  imports: [HomeRoutingModule, CommonModule],
  exports: [],
  providers: [],
})
export class HomeModule {}
