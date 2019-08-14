import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class LugaresService
{
  API_ENDPOINT = 'https://platzisquare-248502.firebaseio.com';
  mapURL = 'https://us1.locationiq.com/v1/search.php?key=7649cc9a63ed4f&format=json&q=';
  paises: any;

  constructor(private afDB: AngularFireDatabase, private http: HttpClient){}

  public getPaises()
  {
    return this.afDB.list('lugares/').valueChanges();
    //return this.http.get(this.API_ENDPOINT + '/lugares');
  }

  public getLugar(id: number)
  {
    return this.afDB.object(`lugares/${id}`).valueChanges();
  }

  public buscarPais(id: number)
  {
    return this.paises.filter((pais) => pais.id == id)[0] || null;
  }

  public editarLugar(lugar: any)
  {
    this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);
  }

  public guardarLugar(lugar: any)
  {
    this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);

    //const headers = new HttpHeaders({'Content-type': 'application/json'});
    //return this.http.post(this.API_ENDPOINT + '/lugares', lugar, {headers: headers});
  }

  public getGeoData(direccion: string)
  {
    return this.http.get(this.mapURL + direccion);
  }
}
