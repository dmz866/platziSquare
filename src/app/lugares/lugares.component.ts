import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.services';

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
  paises: any;

  constructor(private lugaresServ: LugaresService)
  {
    lugaresServ.getPaises()
    .subscribe(data =>
    {
      this.paises = data;
      console.log('tes');
    });
  }
}
