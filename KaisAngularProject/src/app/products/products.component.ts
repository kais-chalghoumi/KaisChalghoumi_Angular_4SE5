import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/Product';
import { CalculService } from '../Services/calcul.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  nombre! : number;
  listProduct! : Product[];
  constructor(private productService : ProductService,private calculeService : CalculService) { }

  ngOnInit(): void {
    this.listProduct=this.productService.listProduct;
    this.nombre = this.calculeService.getNumberOf(this.listProduct, 'quantity' , 0);
  }

  buy(p : number){
    this.listProduct[p].quantity--;
  }

  like(p:number){
    this.listProduct[p].like++;
  }

  Calcule(){
    let nombre = 0 ;
  }

}
