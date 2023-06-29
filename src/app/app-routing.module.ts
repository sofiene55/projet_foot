import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEquipesComponent } from './core/list-equipes/list-equipes.component';
import { ListJoueursComponent } from './core/list-joueurs/list-joueurs.component';
import { ClassemnetEquipesComponent } from './core/classemnet-equipes/classemnet-equipes.component';

const routes: Routes = [

  {path: "equipes", component: ListEquipesComponent},
  {path: "joueurs", component: ListJoueursComponent},
  {path: "classement", component: ClassemnetEquipesComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
