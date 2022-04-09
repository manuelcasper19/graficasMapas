import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras-grafica',
  templateUrl: './barras-grafica.component.html',
  styles: [
 
      ]
})
export class BarrasGraficaComponent  {
  //@ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { x: {}, y: {   min: 0 }
    },
    plugins: {
      legend: {
        display: true,
      },
      
    }
  };

  
  
  @Input() barChartType: ChartType = 'bar';


  @Input() barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [] },
     
    ]
  };





}
