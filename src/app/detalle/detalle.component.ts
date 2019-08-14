import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent
{
  id = null;
  pais;
  paises: any;

  constructor(private route: ActivatedRoute, private lugaresServ: LugaresService)
  {
    this.paises = lugaresServ.getPaises();
    this.id = this.route.snapshot.params['id'];
    this.pais = lugaresServ.buscarPais(this.id);
  }


}
