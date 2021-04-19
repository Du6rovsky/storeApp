import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import ProductEntity from '../core/entities/Product.entity';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Storage} from '@ionic/storage-angular';
import {ProductsService} from '../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})

export class ProductsPage implements OnInit, OnDestroy {
  public searchControl = new FormControl();
  public filteredProducts: Observable<ProductEntity[]>;
  private products: ProductEntity[] = [];

  constructor(
    private storage: Storage,
    private productService: ProductsService) {
    this.getProducts();
  }

  async ngOnInit() {
    this.filteredProducts = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value))
      );

    await this.storage.create();

    this.searchControl.setValue(await this.storage.get('search'));
  }

  ngOnDestroy() {
    this.storage.clear().then();
  }

  public getProducts() {
    this.products = this.productService.getProducts();
  }

  private filter(query: string): ProductEntity[] {
    const queryStr = query || '';
    this.storage.set('search', queryStr).then();
    return this.products.filter(product => product.name.toLowerCase().indexOf(queryStr.toLowerCase()) > -1);
  }
}
