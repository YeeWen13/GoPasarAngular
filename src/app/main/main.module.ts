import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainProductsComponent } from './main-products/main-products.component';
import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import {MdbAccordionModule} from "mdb-angular-ui-kit/accordion";
import {MdbCollapseModule} from "mdb-angular-ui-kit/collapse";


@NgModule({
  declarations: [
    MainComponent,
    MainHomeComponent,
    MainNavbarComponent,
    MainProductsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MdbCarouselModule,
    MdbAccordionModule,
    MdbCollapseModule
  ]
})
export class MainModule { }
