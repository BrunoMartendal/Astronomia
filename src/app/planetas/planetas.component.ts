import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abl-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  planetas = [['Saturno'],
              ['Netuno'],
              ['Urano']
  ];

  constructor() { }

  ngOnInit() {
  }

}
