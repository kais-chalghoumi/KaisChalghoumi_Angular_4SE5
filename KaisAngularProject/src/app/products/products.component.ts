import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/Product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProduct! : Product[];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.listProduct=this.productService.listProduct;
  }

  buy(p : number){
    this.listProduct[p].quantity--;
  }

  like(p:number){
    this.listProduct[p].like++;
  }

}
