import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { Product } from '../product/product';
import { ProductsService } from '../services/products/products.service';
import { numberValidator } from './number-validator';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  addProductFormGroup!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const products: Product[] = this.productsService.getProducts();
    this.addProductFormGroup = this.fb.group({
      products: this.fb.array([]),
    });
    if (products) {
      for (let product of products) {
        this.addProduct(
          product.id.toString(),
          product.imageSource,
          product.title,
          product.rating.toString(),
          product.reviewCount.toString(),
          product.isLimitedDeal,
          product.sellingPrice.toString(),
          product.costPrice.toString(),
          product.discount.toString(),
          product.deliveryText,
          product.deliveryDate,
          product.searchTerm,
        );
      }
    }
  }

  public saveProducts(): void {
    const products: Product[] = this.addProductFormGroup.get('products')?.value;
    if (products) {
      this.productsService.addProducts(products);
    }
  }

  get products(): FormArray {
    return this.addProductFormGroup.get('products') as FormArray;
  }

  public addProduct(
    id: string = '',
    imageSource: string = '',
    title: string = '',
    rating: string = '',
    reviewCount: string = '',
    isLimitedDeal: boolean = false,
    sellingPrice: string = '',
    costPrice: string = '',
    discount: string = '',
    deliveryText: string = '',
    deliveryDate: Date = new Date(),
    searchTerm: string = '',
  ): void {
    this.products.push(
      this.fb.group({
        id: new FormControl(id, Validators.required),
        imageSource: new FormControl(imageSource, Validators.required),
        title: new FormControl(title, Validators.required),
        rating: new FormControl(rating, [Validators.required, numberValidator]),
        reviewCount: new FormControl(reviewCount, Validators.required),
        isLimitedDeal: new FormControl(
          isLimitedDeal,
        ),
        sellingPrice: new FormControl(sellingPrice, [Validators.required, numberValidator]),
        costPrice: new FormControl(costPrice, [Validators.required, numberValidator]),
        discount: new FormControl(discount, [Validators.required, numberValidator]),
        deliveryText: new FormControl(deliveryText, Validators.required),
        deliveryDate: new FormControl(deliveryDate, Validators.required),
        searchTerm: new FormControl(searchTerm, Validators.required),
      })
    );
  }
}
