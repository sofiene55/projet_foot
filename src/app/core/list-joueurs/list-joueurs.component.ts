import { Component } from '@angular/core';


interface Joueur{
  nom: string;
  nationalite: string;
  equipe_actuelle: string;
  taille: string;
  droitier: boolean;

}


@Component({
  selector: 'app-list-joueurs',
  templateUrl: './list-joueurs.component.html',
  styleUrls: ['./list-joueurs.component.scss']
})
export class ListJoueursComponent {
  joueurs: Joueur[] = [
    {
      nom: 'Pavard',
      nationalite: 'France',
      equipe_actuelle: 'Bayern',
      taille: '180',
      droitier: true
    },
    {
      nom: 'Assensio',
      nationalite: 'Espagne',
      equipe_actuelle: 'PSG',
      taille: '175',
      droitier: false
    },
    {
      nom: 'Richarlison',
      nationalite: 'Brésil',
      equipe_actuelle: 'Tottenham',
      taille: '190',
      droitier: true
    },
    
  ];

}
