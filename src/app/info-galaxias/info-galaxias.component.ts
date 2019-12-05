import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'abl-info-galaxias',
  templateUrl: './info-galaxias.component.html',
  styleUrls: ['./info-galaxias.component.css']
})
export class InfoGalaxiasComponent implements OnInit {

  galaxias = [['Andrômeda','A galáxia de Andrômeda é uma galáxia espiral localizada a cerca de 2,54 milhões de anos-luz de distância da Terra, na direção da constelação de Andrômeda. É a galáxia espiral mais próxima da Via Láctea e seu nome é derivado da constelação onde está situada, que, por sua vez, tem seu nome derivado da princesa mitológica Andrômeda. ','https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/280px-Andromeda_Galaxy_%28with_h-alpha%29.jpg'],
              ['Galáxia de Bode (Messier 81)','Galáxia de Bode (também conhecida como NGC 3031, M81 ou Messier 81) é uma galáxia espiral localizada a cerca de doze milhões de anos-luz de distância na direção da constelação de Ursa Maior. Possui aproximadamente trinta e seis mil anos-luz de diâmetro.','https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Messier_81_HST.jpg/280px-Messier_81_HST.jpg'],
              ['Centaurus A','Centaurus A (NGC 5128) é uma galáxia lenticular localizada na direção da constelação de Centaurus a cerca de 14 milhões de anos-luz de distância.','https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Centaurus_A.jpg/280px-Centaurus_A.jpg']
  ];

  id: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

}
