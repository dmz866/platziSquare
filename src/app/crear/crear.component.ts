import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent
{
  lugar: any = {};
  id: any;
  mensaje  = '';

  constructor(private lugaresServ: LugaresService, private route: ActivatedRoute)
  {
    this.id = this.route.snapshot.params['id'];

    if(this.id != 'new')
    {
      this.lugaresServ.getLugar(this.id).subscribe(data =>
      {
        this.lugar = data;
      });
    }
  }

  guardarLugar()
  {
    const direccion = `${this.lugar.calle},${this.lugar.cuidad},${this.lugar.pais}`;
    this.lugaresServ.getGeoData(direccion)
    .subscribe((data: any) =>
    {
      this.lugar.lat = data[0].lat;
      this.lugar.lng = data[0].lon;

      if(this.id == 'new')
      {
        this.lugar.id = Date.now();
        this.lugaresServ.guardarLugar(this.lugar);
        this.mensaje = 'Lugar creado';
      }
      else
      {
        this.lugaresServ.editarLugar(this.lugar);
        this.mensaje = 'Lugar actualizado';
      }
      this.lugar = {};
    });
  }
}
