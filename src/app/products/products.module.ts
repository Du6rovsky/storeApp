import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ProductsPageRoutingModule} from './products-routing.module';
import {ProductsPage} from './products.page';
import {ProductComponent} from './components/product/product.component';
import {ServicesModule} from '../shared/services/services.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductsPageRoutingModule,
        ReactiveFormsModule,
        ServicesModule
    ],
  declarations: [ProductsPage, ProductComponent]
})

export class ProductsPageModule {
}
