import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abl-estrelas',
  templateUrl: './estrelas.component.html',
  styleUrls: ['./estrelas.component.css']
})
export class EstrelasComponent implements OnInit {

  estrelas = [['VY Canis Majoris'],
              ['Sírius A/B'],
              ['Canopus']
  ];

  constructor() { }

  ngOnInit() {
  }

}
