import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main.component";
import {MainHomeComponent} from "./main-home/main-home.component";
import {MainProductsComponent} from "./main-products/main-products.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "", component: MainHomeComponent,
        title: "Home",
      },
      {
        path: "products", component: MainProductsComponent,
        title: "Products",
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
