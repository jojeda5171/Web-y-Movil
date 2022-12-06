import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agency } from '../models/agencia.model';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {

  url = '/api/agencias/';

  constructor(private http: HttpClient) { }

  loadAgencies(): Observable<any> {
    return this.http.get(this.url);
  }

  loadAgency(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  addAgency(agencia: Agency): Observable<any> {
    return this.http.post(this.url, agencia);
  }

  updateAgency(id: string, agencia: Agency): Observable<any> {
    return this.http.put(this.url + id, agencia);
  }

  deleteAgency(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
