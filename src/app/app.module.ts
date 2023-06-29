import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEquipesComponent } from './core/list-equipes/list-equipes.component';
import { ListJoueursComponent } from './core/list-joueurs/list-joueurs.component';
import { ClassemnetEquipesComponent } from './core/classemnet-equipes/classemnet-equipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEquipesComponent,
    ListJoueursComponent,
    ClassemnetEquipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
