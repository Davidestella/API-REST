import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private baseUrl = 'https://creazionedatabase-default-rtdb.europe-west1.firebasedatabase.app/lista';

  constructor(private http: HttpClient) {}

  // GET: recupera la lista
  getLista(): Observable<any> {
    return this.http.get(`${this.baseUrl}.json`);
  }

  // POST: aggiunge un elemento
  aggiungiElemento(elemento: string): Observable<any> {
    return this.http.post(`${this.baseUrl}.json`, { nome: elemento });
  }

  // DELETE: elimina un elemento per id
  eliminaElemento(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}.json`);
  }
}
