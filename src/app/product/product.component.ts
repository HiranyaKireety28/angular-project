import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  @Output() productClicked = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.product);
  }

  public showProductDetails(): void{
    this.productClicked.emit(this.product);
  }
}
