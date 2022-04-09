import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {


  doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      { data: [] },
 
    ]
  };

  constructor( private servicesVentas : GraficasService) { }

  ngOnInit(): void {
    this.servicesVentas.getVentasMeses()
        .subscribe( ({ label, values}) =>{
          console.log(label),
          console.log(values)
          this.doughnutChartData = {
            labels: label,
            datasets: [{ data: values }]
          }
        }
          )

  }

}
