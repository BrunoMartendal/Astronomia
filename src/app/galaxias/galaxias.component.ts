import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abl-galaxias',
  templateUrl: './galaxias.component.html',
  styleUrls: ['./galaxias.component.css']
})
export class GalaxiasComponent implements OnInit {

  galaxias = [['Andrômeda'],
              ['Galáxia de Bode'],
              ['Centaurus A']
  ];

  constructor() { }

  ngOnInit() {
  }

}
