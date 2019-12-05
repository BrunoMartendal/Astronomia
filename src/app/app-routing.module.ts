import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { GalaxiasComponent } from './galaxias/galaxias.component';
import { EstrelasComponent } from './estrelas/estrelas.component';
import { InfoEstrelasComponent } from './info-estrelas/info-estrelas.component';
import { InfoPlanetasComponent } from './info-planetas/info-planetas.component';
import { InfoGalaxiasComponent } from './info-galaxias/info-galaxias.component';
import { BuracosNegrosComponent } from './buracos-negros/buracos-negros.component';
import { NebulosasComponent } from './nebulosas/nebulosas.component';
import { InfoBuracosNegrosComponent } from './info-buracos-negros/info-buracos-negros.component';
import { InfoNebulosasComponent } from './info-nebulosas/info-nebulosas.component';


const routes: Routes = [
  {path: 'body', component: BodyComponent},
  {path: 'estrelas', component: EstrelasComponent},
  {path: 'planetas', component: PlanetasComponent},
  {path: 'galaxias', component: GalaxiasComponent},
  {path: 'buracos-negros', component: BuracosNegrosComponent},
  {path: 'nebulosas', component: NebulosasComponent},
  {path: 'info-estrelas/:id', component: InfoEstrelasComponent},
  {path: 'info-planetas/:id', component: InfoPlanetasComponent},
  {path: 'info-galaxias/:id', component: InfoGalaxiasComponent},
  {path: 'info-buracos-negros/:id', component: InfoBuracosNegrosComponent},
  {path: 'info-nebulosas/:id', component: InfoNebulosasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
