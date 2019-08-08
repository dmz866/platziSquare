import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.services';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent
{
  lugar: any = {};

  constructor(private lugaresServ: LugaresService){}

  guardarLugar()
  {
    const direccion = `${this.lugar.calle},${this.lugar.cuidad},${this.lugar.pais}`;
    this.lugaresServ.getGeoData(direccion)
    .subscribe((data: any) =>
    {
      this.lugar.lat = data[0].lat;
      this.lugar.lng = data[0].lon;
      this.lugar.id = Date.now();
      this.lugaresServ.guardarLugar(this.lugar);
      alert('Lugar guardado');
      this.lugar = {};
    });
  }
}
