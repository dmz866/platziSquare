import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
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

  hacerAlgo()
  {
    alert('Dosh');
  }
}
