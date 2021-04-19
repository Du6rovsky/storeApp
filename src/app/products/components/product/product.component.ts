import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../../shared/services/products.service';
import ProductEntity from '../../../core/entities/Product.entity';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public product: ProductEntity;
  public productForm: FormGroup;
  public currency = '$';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {
  }

  ngOnInit() {
    this.getProduct();
    this.prepareForm();
  }

  public setAmount(value: string) {
    this.productForm.controls.amount.setValue(value);
    this.changeAmount(value);
  }

  public setQuantity(value: string) {
    this.productForm.controls.quantity.setValue(value);
    this.changeQuantity(value);
  }

  public changeAmount(value: string) {
    const quantity = (Number(value) / Number(this.product.price)).toFixed(2);
    this.productForm.controls.quantity.setValue(quantity);
  }

  public changeQuantity(value: string) {
    const amount = (Number(value) * Number(this.product.price)).toFixed(2);
    this.productForm.controls.amount.setValue(amount);
  }

  private prepareForm() {
    this.productForm = new FormGroup({
      amount: new FormControl(''),
      quantity: new FormControl(''),
    });
  }

  private getProduct() {
    const productId = this.route.snapshot.paramMap.get('productId');
    this.product = this.productService.getProduct(productId);
  }
}
