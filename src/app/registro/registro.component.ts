import { Component } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent
{
  registro: any = {};

  constructor(private autoServ: AutorizacionService){}

  public registrar()
  {
    this.autoServ.registro(this.registro.email, this.registro.password);
  }
}
