import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private API_SERVER = "http://localhost:8080/empresas/";

  constructor(private httpClient: HttpClient) { }



  public getAllEmpresas(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public saveEmpresa (empresa:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,empresa);
  }

  public deleteEmpresa(id):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "delete/"+id);
  }

}