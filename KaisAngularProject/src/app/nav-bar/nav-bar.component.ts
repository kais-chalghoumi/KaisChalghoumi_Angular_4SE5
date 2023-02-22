import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/Product';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  product! : Product;
  constructor() { }

  ngOnInit(): void {
    this.product = new Product;
  }

}
