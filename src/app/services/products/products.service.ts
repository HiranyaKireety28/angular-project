import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products!: BehaviorSubject<Product[]>;
  public products$!: Observable<Product[]>;

  constructor() {
    this.products = new BehaviorSubject<Product[]>([]);
    this.products$ = this.products.asObservable();
  }

  public addProducts(products: Product[]): void {
    this.products.next([...products]);
  }

  public removeProduct(id: number): void {
    const products = this.products.value;
    if(products){
      const index = products.findIndex((product: Product) => product.id === id);
      products.splice(index);
      this.products.next(products);
    }
  }

  public getProducts(): Product[] {
    return this.products.value;
  }
}
