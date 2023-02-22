import { Component, OnInit } from '@angular/core';
import { Payement } from '../core/model/payement';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  payement! : Payement
  constructor() { }

  ngOnInit(): void {
    this.payement = new Payement;
  }

}
