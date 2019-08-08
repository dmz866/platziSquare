import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class LugaresService
{
  paises = [{id: 1, plan: 'pagado', cercania: 1, distancia: 10, activo: true, nombre: 'Ecuador', descripcion: 'Nueva descripcion'},
            {id: 2, plan: 'gratuito', cercania: 2, distancia: 1.8, activo: false, nombre: 'Chile', descripcion: 'Nueva descripcion'},
            {id: 3, plan: 'gratuito', cercania: 1, distancia: 35, activo: true, nombre: 'Uruguay', descripcion: 'Nueva descripcion'},
            {id: 4, plan: 'gratuito', cercania: 2, distancia: 2.2, activo: true, nombre: 'Peru', descripcion: 'Nueva descripcion'},
            {id: 5, plan: 'pagado', cercania: 3, distancia: 20, activo: false, nombre: 'Colombia', descripcion: 'Nueva descripcion'}];

  constructor(private afDB: AngularFireDatabase){}

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
}
