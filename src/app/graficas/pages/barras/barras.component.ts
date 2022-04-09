import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Vendedor } from '../../interfaces/graficas.interface';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {
   //@ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  //vendedores : Vendedor [] = [];

 
  
  ventas : ChartData[] = [];
  

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'y', //Esto hace que sea horizontal el gráfico
  }
  
  barCharVentasVendedores: ChartData<'bar'> = {
    labels: [],
    datasets: [ { data: []}]
  }

  barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: []},
      
    ]
  };



  constructor( private servicesGraficas : GraficasService) { }


  ngOnInit(): void {
    this.servicesGraficas.getVentasMeses()
    .subscribe( ({ label, values }) => {
      // console.log(label);
      // console.log(values);
    

      this.barChartData = {
        labels: label,
        datasets: [ { data: values, label: 'Ventas por meses', backgroundColor: '#416FFA' }],
      }
     
   
    })   

  }

}
