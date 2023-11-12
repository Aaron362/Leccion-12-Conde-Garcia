import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/hereo.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://login-app-d7026-default-rtdb.firebaseio.com';

  constructor( private http: HttpClient ) { }


  crearHeroe( heroe: HeroeModel )  {

    return this.http.post(`${ this.url }/Heroes.json`, heroe)
            .pipe(
              map( (resp: any) => {
                heroe.id = resp.name;
                return heroe;
              })
            );

  }
}
