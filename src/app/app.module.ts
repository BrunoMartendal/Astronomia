import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { EstrelasComponent } from './estrelas/estrelas.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { GalaxiasComponent } from './galaxias/galaxias.component';
import { InfoEstrelasComponent } from './info-estrelas/info-estrelas.component';
import { InfoPlanetasComponent } from './info-planetas/info-planetas.component';
import { InfoGalaxiasComponent } from './info-galaxias/info-galaxias.component';
import { NebulosasComponent } from './nebulosas/nebulosas.component';
import { BuracosNegrosComponent } from './buracos-negros/buracos-negros.component';
import { InfoBuracosNegrosComponent } from './info-buracos-negros/info-buracos-negros.component';
import { InfoNebulosasComponent } from './info-nebulosas/info-nebulosas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BodyComponent,
    EstrelasComponent,
    PlanetasComponent,
    GalaxiasComponent,
    InfoEstrelasComponent,
    InfoPlanetasComponent,
    InfoGalaxiasComponent,
    NebulosasComponent,
    BuracosNegrosComponent,
    InfoBuracosNegrosComponent,
    InfoNebulosasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
