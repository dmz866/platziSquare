import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutorizacionService } from '../services/autorizacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent
{
  registro: any = {};

  constructor(private autoServ: AutorizacionService){}

  login()
  {
    this.autoServ.login(this.registro.email, this.registro.password);
  }
}
