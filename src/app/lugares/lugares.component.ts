import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable',
    [
      state('inicial', style(
        {
          opacity: 0
          //backgroundColor: 'green',
          //transform: 'rotate3d(0, 0, 0, 0deg)'
        })),
      state('final', style(
        {
          opacity: 1
          //backgroundColor: 'yellow',
          //transform: 'rotate3d(5, 10, 20, 30deg)'
        })),
        transition('inicial => final', animate(2000)),
        transition('final => inicial', animate(1000))
    ])
  ]
})
export class LugaresComponent
{
  title = 'platzisquare';
  state = 'inicial';
  nombre: string;
  lat: number = -0.180653;
  lng: number = -78.467834;
  paises: any;

  constructor(private lugaresServ: LugaresService)
  {
    lugaresServ.getPaises()
    .subscribe(data =>
    {
      this.paises = data;
      this.animar();
    });
  }

  animar()
  {
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }

  animacionInicial(e)
  {

  }

  animacionFinal(e)
  {

  }
}
