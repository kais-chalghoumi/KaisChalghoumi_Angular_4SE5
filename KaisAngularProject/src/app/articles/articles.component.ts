import { Component, OnInit } from '@angular/core';
import { Article } from '../core/model/Article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  titre! : string;
  listeArticles! : Article[];
  constructor() { }

  ngOnInit(): void {
    this.titre = "Les articles du jour";
    this.listeArticles = [
      { titre : "le championnat du monde", contenu:"le champion du monde de cette année", auteur:"Med Taher" , date:"12/12/2005", categorie : "Sport"},
      { titre : "les nouveaux parents", contenu:"les nouveaux parents", auteur:"Ahmed Said" , date:"11/11/2018", categorie : "Education"},
      { titre : "Comment écrire votre CV", contenu:"Pour réussir à décraucher un emploi", auteur:"Marie Elsa" , date:"02/04/2017", categorie : "Travail"},
    ]
  }

}
