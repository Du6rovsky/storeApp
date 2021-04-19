import {Injectable} from '@angular/core';
import * as data_ from '../../core/data/data.mockup.json';
import ProductEntity from '../../core/entities/Product.entity';

const products = data_.products;

@Injectable()
export class ProductsService {
  private items: ProductEntity[] = products;

  public getProducts(): Array<ProductEntity> {
    return this.items;
  }

  public getProduct(itemId: string): ProductEntity {
    return this.items.find(item => item.id === itemId);
  }
}
