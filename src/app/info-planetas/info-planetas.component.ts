import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'abl-info-planetas',
  templateUrl: './info-planetas.component.html',
  styleUrls: ['./info-planetas.component.css']
})
export class InfoPlanetasComponent implements OnInit {

  planetas = [['Saturno', 'Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas.','https://abrilsuperinteressante.files.wordpress.com/2019/10/si_saturno.png'],
              ['Netuno', 'Netuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres. Netuno orbita o Sol a uma distância média de 30,1 unidades astronômicas.','https://static.todamateria.com.br/upload/55/2c/552c1951b24cd-planeta-netuno-medium.jpg'],
              ['Urano', 'Urano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano, o pai de Cronos (Saturno) e o avô de Zeus (Júpiter).','https://static.todamateria.com.br/upload/55/2c/552c107117c37-planeta-urano-medium.jpg']
  ];

  id: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

}
