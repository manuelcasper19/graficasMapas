import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Vendedor } from '../interfaces/graficas.interface';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {
  
  apiUrl : string = environment.urlaApi

  constructor( private http : HttpClient ) { }

  getVentasMeses(){
    return this.http.get(`${this.apiUrl}/meses`)
               .pipe(
                 map( ventas => {
                  const label = Object.keys(ventas)
                  const values = Object.values(ventas)
                  
                  return { label, values }
                 })

                )
  }

  getVentasVendedorsMeses(): Observable<Vendedor[]>{
    return this.http.get<Vendedor[]>(`${this.apiUrl}/vendedores`)
            // .pipe( 
            //   map( vendedores => console.log)
            // )
            //   //  .pipe(
            //   //    map( ventas => {
            //   //     const label = Object.keys(ventas[0].meses)
            //   //     const values = Object.values(ventas)
                  
            //   //     return { label, values }
            //   //    })

              //   )
  }
}
