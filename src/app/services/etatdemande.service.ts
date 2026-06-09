import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etatdemande } from '../models/etatdemande';
@Injectable({
  providedIn: 'root'
})
export class EtatdemandeService {

  private baseUrl = 'http://localhost:8080/etatdemande';

  constructor(private http: HttpClient) { }

  modifierEtatDemande(id: number, etatDemande: Etatdemande): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, etatDemande);
  }



  getDemandesParEtat(idEtat: number): Observable<Etatdemande[]> {
    const url = `${this.baseUrl}/demandes/${idEtat}`; // Endpoint pour récupérer les demandes par état
    return this.http.get<Etatdemande[]>(url);
  }

}
