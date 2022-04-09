import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSpinner } from '@angular/material/progress-spinner';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { GraficasService } from '../../services/graficas.service';




export interface Vendedor {
  id?: number,
  nombre: string,
  meses: string,
  valor: number
}


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
    `
      table {
      width: 100%;
    }

    .mat-form-field {
      font-size: 14px;
      width: 100%;
    }

    td, th {
      width: 25%;
    }
    .mat-row .mat-cell {
      border-bottom: 1px solid transparent;
      border-top: 1px solid transparent;
      cursor: pointer;
      }

    .mat-row:hover .mat-cell {
      border-color: currentColor;
    }
    `
  ]
})
export class TodoComponent implements  OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'mes', 'valor'];
  dataSource!: MatTableDataSource<Vendedor>;
  vendedores : Vendedor [] = [];
  loading : boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor( private graficasServices: GraficasService) {
  
  }
  ngOnInit(): void {
    this.graficasServices.getVentasVendedorsMeses()
        .subscribe( vendedores =>  {
          
        
          vendedores.forEach( vendedor => {
             //console.log(vendedor.id)
             const id = vendedor.id
             const nombre = vendedor.Vendedor
             const meses = Object.keys(vendedor.meses)
             const valor = Object.values(vendedor.meses)    

            for(let i = 0; i<meses.length; i++){            

              const newVendedor: Vendedor  = { 
                id: id,
                nombre: nombre,
                meses: meses[i],
                valor: valor[i]              

           }
            this.vendedores.push(newVendedor)
            }       

          })
          
          this.dataSource = new MatTableDataSource(this.vendedores)

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.loading = true;
          
          
          
        })
  }


  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
   
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


