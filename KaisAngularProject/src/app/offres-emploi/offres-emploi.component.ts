import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/Emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {

  nbre! : number;
  filter! : string;
  listOffresEmploi! : Emploi[];
  constructor() { }

  ngOnInit(): void {
    this.listOffresEmploi = [
    {reference: "ref001", titre: "devops", entreprise: "esprit", etat: true},
    {reference: "ref002", titre: "web", entreprise: "tekup", etat: false},
    {reference: "ref003", titre: "bi", entreprise: "sesame", etat: false},
    ] 
  }

  Bilan(){
    this.nbre=0;
    for(let i=0 ; i<this.listOffresEmploi.length; i++){
      if(this.listOffresEmploi[i].etat == true){
        this.nbre++;
      }
    }
    return this.nbre;
  }

}
