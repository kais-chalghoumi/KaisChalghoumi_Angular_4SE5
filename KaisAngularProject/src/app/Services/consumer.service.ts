import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../core/model/Product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  url:string='http://localhost:3000/products';
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.url);
  }

  getProductById(id:number){
    return this.http.get<Product>(this.url+'/'+id);
  }

  postProduct(product:Product){
    return this.http.post<Product>(this.url,product);
  }

  deleteProduct(id: number){
    return this.http.delete(this.url+'/'+id);
  }

  updateProduct(id:number,product:Product){
    return this.http.put<Product>(this.url+'/'+id,product);
  }
}
