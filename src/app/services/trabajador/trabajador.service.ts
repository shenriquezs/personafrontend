import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  private API_SERVER = "http://localhost:8080/trabajadores/";

  constructor(private httpClient: HttpClient) { }



  public getAllTrabajadores(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public saveTrabajador (trabajador:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,trabajador);
  }

  public deleteTrabajador(id):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "delete/"+id);
  }

}