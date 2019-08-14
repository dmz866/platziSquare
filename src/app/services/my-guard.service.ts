import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AutorizacionService } from './autorizacion.service';

@Injectable()
export class MyGuardService implements CanActivate
{
  isLogged = false;

  constructor(private authServ: AutorizacionService)
  {
    authServ.isLogged().subscribe(data =>
    {
      this.isLogged = (data && data.uid) ? true : false;
    }, error =>
    {
      this.isLogged = false;
    });
  }

  canActivate()
  {
    return this.isLogged;
  }
}
