import { Component } from '@angular/core';


interface Equipe{
  nom_equipe: string;
  pays: string;
  titres: string;
  annee: string;
  president: string;

}


@Component({
  selector: 'app-list-equipes',
  templateUrl: './list-equipes.component.html',
  styleUrls: ['./list-equipes.component.scss']
})
export class ListEquipesComponent {

  equipes: Equipe[] = [
    {
      nom_equipe: 'Real Madrid',
      pays: 'Spain',
      titres: '120',
      annee: '1902',
      president: 'Florentino Perez'
    },
    {
      nom_equipe: 'Bayern',
      pays: 'Germany',
      titres: '90',
      annee: '1899',
      president: 'true'
    },
    {
      nom_equipe: 'Barcelone',
      pays: 'Spain',
      titres: '99',
      annee: '1897',
      president: 'Laporta'
    },
    
    
  ];


}
