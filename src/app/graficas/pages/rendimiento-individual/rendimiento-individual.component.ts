import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-rendimiento-individual',
  templateUrl: './rendimiento-individual.component.html',
  styles: [
  ]
})
export class RendimientoIndividualComponent implements OnInit {

  
  ventasVendedores : ChartData[] = [];
  barCharVentasVendedores: ChartData<'bar'> = {
    labels: [],
    datasets: [ { data: []}]
  }

  public barChartOptions: ChartConfiguration['options'] = {
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


  barChartType: ChartType = 'bar';


  constructor( private servicesGraficas : GraficasService) { }

  ngOnInit(): void {
    this.servicesGraficas.getVentasVendedorsMeses()
    .subscribe( vendedores => {


      vendedores.forEach( vendedor => {
         console.log(vendedor.Vendedor)
         const nombre = vendedor.Vendedor;
         console.log(Object.keys(vendedor.meses))
         console.log(Object.values(vendedor.meses))
         const val = Object.values(vendedor.meses);
         this.barCharVentasVendedores = {
           labels: Object.keys(vendedor.meses),
           datasets: [ { data: val, label: 'Ventas por mes: '+ nombre, backgroundColor:'#5C21DE'  } ]
         }
    
         this.ventasVendedores.push(this.barCharVentasVendedores);

         
      })
      console.log(this.ventasVendedores)
    }
  

    )
  }

}
