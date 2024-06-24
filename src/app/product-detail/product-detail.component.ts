import { Component, OnInit } from '@angular/core';
//import { Product, productList } from '../products/products.mock';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
    private _apiService: ApiService
  ) { }

  producto?: IProduct;
  loading: boolean = true;
  color: string = '';

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getProductById(Number(params['productId'])).subscribe({
          next: (data: IProduct) => {
            this.producto = data;
            this.color = this.producto?.price as number > 200 ? 'red' : '';
            this.loading = false;
          }, 
          error: (error: any) => {
            console.log(error);
            this.loading = false;
          }
        })
      }
    })
  }
}
