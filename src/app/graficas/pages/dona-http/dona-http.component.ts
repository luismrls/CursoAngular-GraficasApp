import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficaService: GraficasService) { }

  ngOnInit(): void {

    this.graficaService.getUsuariosRedesSociales()
      .subscribe( resp => {
        console.log(resp)
      })

  }

}
