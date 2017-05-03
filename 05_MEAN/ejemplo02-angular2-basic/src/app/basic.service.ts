import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
// import { * } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BasicService {

  constructor(private http: Http) { }

  getResultado(): Observable<Response> {
    let cabeceraDeSeguridad = new Headers();

    let usuario = "german";
    let password = "german_1";

    cabeceraDeSeguridad.append("Authorization", "Basic " + btoa(usuario + ":" + password));
    let opcionesDeRequest = new RequestOptions({ headers: cabeceraDeSeguridad });
    return this.http.get("http://127.0.0.1:8080/home", opcionesDeRequest)
      .map((response: Response) => {
        return response;
      }).catch( (error: any) => {
        console.log("Error!", error);
        return Observable.throw("Error al procesar la peticion");
      });
  }
}
