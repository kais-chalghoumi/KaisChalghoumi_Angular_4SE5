import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/model/Emploi';
import { CalculService } from '../Services/calcul.service';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {

  nbre! : number;
  Offre! : number;
  filter! : string;
  listOffresEmploi! : Emploi[];
  constructor(private calculeService : CalculService) { }

  ngOnInit(): void {
    this.listOffresEmploi = [
    {reference: "ref001", titre: "devops", entreprise: "esprit", etat: true},
    {reference: "ref002", titre: "web", entreprise: "tekup", etat: false},
    {reference: "ref003", titre: "bi", entreprise: "sesame", etat: false},
    ] 
    this.Offre = this.calculeService.getNumberOf(this.listOffresEmploi, 'etat' , false);
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
