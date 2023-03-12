import { Component, OnInit, ɵComponentFactory } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/model/Product';
import { CalculService } from '../Services/calcul.service';
import { ConsumerService } from '../Services/consumer.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  nombre! : number;
  listProduct! : Product[];
  priceMax! : number;
  constructor(private productService : ProductService, private calculeService : CalculService, private consumer : ConsumerService, private route : Router) { }

  ngOnInit(): void {
  //  this.listProduct=this.productService.listProduct;
  //  this.nombre = this.calculeService.getNumberOf(this.listProduct, 'quantity' , 0);
      this.consumer.getProducts().subscribe({
        next: (data)=>this.listProduct=data,
      });
  }

  buy(product:Product){
    let i = this.listProduct.indexOf(product);
    this.listProduct[i].quantity--;
  }

  like(product:Product){
    let i = this.listProduct.indexOf(product);
    this.listProduct[i].like++;
  }

  Calcule(){
    let nombre = 0 ;
  }

  delete(id:number){
    this.consumer.deleteProduct(id).subscribe({
    next: ()=>this.ngOnInit(),
    });
  }
}
