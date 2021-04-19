import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductsPage} from './products.page';
import {ProductComponent} from './components/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  },
  {
    path: ':productId',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {
}
