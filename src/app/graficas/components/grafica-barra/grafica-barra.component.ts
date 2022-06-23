import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
  
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() barChartData: ChartData<'bar'> = { datasets: [] };
  @Input() labels: string[] = [];
  @Input() horizontal: boolean = false;

  constructor() { }

  ngOnInit(): void {

    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
    }
    this.barChartData.labels = this.labels;
  }

 
  public barChartType: ChartType = 'bar';
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

 
  // public barChartData: ChartData<'bar'> = {
  //   labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  //   datasets: [
  //     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  //     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  //     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C' },
  //   ],
  // };
}
