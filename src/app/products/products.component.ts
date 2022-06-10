import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from '../product/product';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products?: Product[];
  filteredProducts?: Product[];
  selectedProduct?: Product;
  searchTerm?: string;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.queryParams.subscribe((queryParams: Params) => {
    //   this.searchTerm = queryParams['searchTerm'];
    //   if(this.searchTerm && this.products){
    //     this.filteredProducts = this.products?.filter((product: Product) => product.searchTerm === this.searchTerm);
    //   }
    // });

    this.route.params.subscribe((params: Params) => {
        this.searchTerm = params['searchTerm'];
        if(this.searchTerm && this.products){
          this.filteredProducts = this.products?.filter((product: Product) => product.searchTerm === this.searchTerm);
        }
      });

    this.productService.products$.subscribe((products: Product[]) => {
      this.products = products;
      if(this.searchTerm && this.products){
        this.filteredProducts = this.products?.filter((product: Product) => product.searchTerm === this.searchTerm);
      }

      console.log('products', products);
    });
  }

  showProductDetails(product: Product): void {
    this.selectedProduct = product;
  }

  trackByProduct(index: number, product: Product) {
    return product.id;
  }
}
