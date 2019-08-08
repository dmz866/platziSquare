import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class LugaresService
{
  mapURL = 'https://us1.locationiq.com/v1/search.php?key=7649cc9a63ed4f&format=json&q=';
  paises = [{id: 1, plan: 'pagado', cercania: 1, distancia: 10, activo: true, nombre: 'Ecuador', descripcion: 'Nueva descripcion'},
            {id: 2, plan: 'gratuito', cercania: 2, distancia: 1.8, activo: false, nombre: 'Chile', descripcion: 'Nueva descripcion'},
            {id: 3, plan: 'gratuito', cercania: 1, distancia: 35, activo: true, nombre: 'Uruguay', descripcion: 'Nueva descripcion'},
            {id: 4, plan: 'gratuito', cercania: 2, distancia: 2.2, activo: true, nombre: 'Peru', descripcion: 'Nueva descripcion'},
            {id: 5, plan: 'pagado', cercania: 3, distancia: 20, activo: false, nombre: 'Colombia', descripcion: 'Nueva descripcion'}];

  constructor(private afDB: AngularFireDatabase, private http: HttpClient){}

  public getPaises()
  {
    return this.afDB.list('lugares/').valueChanges();
  }

  public buscarPais(id: number)
  {
    return this.paises.filter((pais) => pais.id == id)[0] || null;
  }

  public guardarLugar(lugar: any)
  {
    this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);
  }

  public getGeoData(direccion: string)
  {
    return this.http.get(this.mapURL + direccion);
  }
}
