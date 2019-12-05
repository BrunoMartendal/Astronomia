import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'abl-info-estrelas',
  templateUrl: './info-estrelas.component.html',
  styleUrls: ['./info-estrelas.component.css']
})
export class InfoEstrelasComponent implements OnInit {

  estrelas = [['VY Canis Majoris', 'A maior estrela conhecida do Universo é a VY Canis Majoris, também conhecida como VY Cma, que fica a 5 mil anos-luz da Terra e tem 2,9 bilhões de quilômetros de diâmetro, porte 1 800 a 2 100 vezes maior que o do Sol. O diâmetro da superstar equivale a nove vezes a distância da Terra ao Sol!','http://pm1.narvii.com/6635/f45a90371c3459f334dfd035a2a1646d02c286d7_00.jpg'],
              ['Sírius A/B', 'Sírio é uma estrela binária de duas estrelas brancas orbitando entre si a uma distância de 20 unidades astronômicas, aproximadamente a distância entre o Sol e Urano, com um período de 50,1 anos. A estrela mais brilhante denominada Sírius A','https://4.bp.blogspot.com/-Exn8I3d8JLY/V_OcDBXLchI/AAAAAAAAAek/3pE_CA9gqww7hr5rLwQtDuQyBl6W3ugKgCLcB/s640/Sirius%2BA%2Ben%2BB.jpg'],
              ['Canopus', ' Canopus é a estrela mais brilhante da constelação de Carina e a segunda estrela mais brilhante no céu. Canopus uma supergigante branco-amarelada está, a 310 anos-luz de nosso sistema solar ','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcdmz9R-pnJMLaoY7g-VuzZ6l9djeTPB3RD2YEgPS12jiExFO&s']
  ];

  id: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

}
