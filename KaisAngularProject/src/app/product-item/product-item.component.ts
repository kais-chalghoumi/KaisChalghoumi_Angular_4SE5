import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../core/model/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product! : Product;
  @Output() incrementEvent = new EventEmitter<Product>();
  @Output() decrementEvent = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
    
  }

  sentNotif(){
    this.incrementEvent.emit(this.product);
  }

  sentNotifBuy(){
    this.decrementEvent.emit(this.product);
  }
}
