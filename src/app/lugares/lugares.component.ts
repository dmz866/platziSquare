import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent
{
  title = 'platzisquare';
  nombre: string;
  lat: number = 51.678418;
  lng: number = 7.809007;
  paises = [{plan: 'pagado', cercania: 1, distancia: 10, activo: true, nombre: 'Ecuador'},
            {plan: 'gratuito', cercania: 2, distancia: 1.8, activo: false, nombre: 'Chile'},
            {plan: 'gratuito', cercania: 1, distancia: 35, activo: true, nombre: 'Uruguay'},
            {plan: 'gratuito', cercania: 2, distancia: 2.2, activo: true, nombre: 'Peru'},
            {plan: 'pagado', cercania: 3, distancia: 20, activo: false, nombre: 'Colombia'}];
}
