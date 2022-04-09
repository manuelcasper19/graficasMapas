import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donas-grafica',
  templateUrl: './donas-grafica.component.html',
  styles: [
  ]
})
export class DonasGraficaComponent implements OnInit {
  //public doughnutChartLabels: string[] = [];
 @Input() public doughnutChartData: ChartData<'doughnut'> = {
    labels:[],
    datasets: [
      { data: [] },
 
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';



  constructor() { }

  ngOnInit(): void {
  }

}
