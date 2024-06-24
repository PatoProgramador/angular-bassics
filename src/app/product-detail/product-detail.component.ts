import { Component, OnInit } from '@angular/core';
import { Product, productList } from '../products/products.mock';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute) {}

  producto?: Product;
  productList: Product[] = productList;
  loading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe(
        params => {
          this.producto = this.productList.find(product => product.id == params['productId']);
          this.loading = false;
        }
      );
    }, 1500)
  }
}
