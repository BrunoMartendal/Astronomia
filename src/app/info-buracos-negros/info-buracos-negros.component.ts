import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'abl-info-buracos-negros',
  templateUrl: './info-buracos-negros.component.html',
  styleUrls: ['./info-buracos-negros.component.css']
})
export class InfoBuracosNegrosComponent implements OnInit {

  buracosNegros = [['Gargantua', 'Buraco negro do filme Interestelar','https://vignette.wikia.nocookie.net/interstellarfilm/images/9/9b/Black_hole.png/revision/latest?cb=20150322005003'],
              ['Sagittarius A', 'Buraco negro da Via Láctea','https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/X-RayFlare-BlackHole-MilkyWay-20140105.jpg/220px-X-RayFlare-BlackHole-MilkyWay-20140105.jpg'],
              ['Pōwehi', 'Buraco negro da galaxia M87. Foi primeiro buraco negro a ter sido fotografado pelo homem.','https://imagens.canaltech.com.br/241667.478147-foto-real-do-buraco-negro-da-M87.jpg']];

  id: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

}
