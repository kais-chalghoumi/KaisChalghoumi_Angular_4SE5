import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { Emploi } from '../core/model/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent implements OnInit {

  listeEmploi!: Emploi[];
  constructor() { }

  ngOnInit(): void {
    this.listeEmploi = [
      {reference: "Ref001", titre: "Ingenieur", entreprise: "Actia", etat: true},
      {reference: "Ref002", titre: "Enseignant", entreprise: "Esprit", etat: false},
      {reference: "Ref003", titre: "Enseignant", entreprise: "Esprit", etat: true},
      {reference: "Ref004", titre: "Enseignant", entreprise: "Esprit", etat: false},
      {reference: "Ref005", titre: "Enseignant", entreprise: "Esprit", etat: true},
    ];
  }

  Bilan(){
    return this.listeEmploi.filter(listeEmploi => listeEmploi.etat === true).length;
  }
}
