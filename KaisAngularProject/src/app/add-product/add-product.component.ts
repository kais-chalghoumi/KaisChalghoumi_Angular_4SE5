import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/model/Product';
import { ConsumerService } from '../Services/consumer.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product!: Product;
  constructor(private productService : ProductService, private route : Router, private consumer : ConsumerService) { }

  ngOnInit(): void {
    this.product = new Product;
  }

  ajouter(){
    //this.productService.addProduct(this.product);
    //this.route.navigateByUrl('/products')

     this.consumer.postProduct(this.product).subscribe({
        next: ()=>this.route.navigateByUrl('/products'),
      })
  }
}