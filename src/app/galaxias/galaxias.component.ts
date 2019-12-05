import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abl-galaxias',
  templateUrl: './galaxias.component.html',
  styleUrls: ['./galaxias.component.css']
})
export class GalaxiasComponent implements OnInit {

  galaxias = [['Andrômeda'],
              ['Galáxia de Bode (Messier 81)'],
              ['Centaurus A']
  ];

  constructor() { }

  ngOnInit() {
  }

}
