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
    this.lugar.id = Date.now();
    this.lugaresServ.guardarLugar(this.lugar);
  }
}
