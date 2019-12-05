import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abl-nebulosas',
  templateUrl: './nebulosas.component.html',
  styleUrls: ['./nebulosas.component.css']
})
export class NebulosasComponent implements OnInit {

  nebulosas = [['Hélix'],
              ['Cabeça de Cavalo'],
              ['Pilares da Criação']
  ];

  constructor() { }

  ngOnInit() {
  }

}
