import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartType: ChartType = 'doughnut';
  // public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  };

  constructor(private graficaService: GraficasService) { }

  ngOnInit(): void {

    // this.graficaService.getUsuariosRedesSociales()
    //   .subscribe( resp => {
    //     const labels = Object.keys( resp );
    //     const values = Object.values( resp );

    //     this.doughnutChartData.labels = labels;
    //     this.doughnutChartData.datasets.push({data: values}) ;


    //   })
    this.graficaService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({labels, data}) => {

        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets.push(data) ;


      })

  }

}
