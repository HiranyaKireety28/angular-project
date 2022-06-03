import { Injectable } from '@angular/core';
import { Product } from '../../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products!: Product[];

  constructor() { }

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public removeProduct(id: number): void {
    const index = this.products.findIndex((product: Product) => product.id === id);
    this.products.splice(index);
  }

  public getProducts(): Product[] {
    return this.products;
  }
}
