import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abl-buracos-negros',
  templateUrl: './buracos-negros.component.html',
  styleUrls: ['./buracos-negros.component.css']
})
export class BuracosNegrosComponent implements OnInit {

  buracosNegros = [['Gargantua'],
              ['Sagittarius A'],
              ['Pōwehi']
  ];

  constructor() { }

  ngOnInit() {
  }

}
