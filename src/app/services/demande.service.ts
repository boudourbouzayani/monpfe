import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Demande } from '../models/demande';
import { Demandedocument } from '../models/demandedocument';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private baseUrl = 'http://localhost:8080/demandes';

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Demande> {
    return this.http.get<Demande>(`${this.baseUrl}/${id}`);
  }

  getAll(): Observable<Demande[]> {
    return this.http.get<Demande[]>(`${this.baseUrl}/all`);
  }
  ajouterDemande(demande: any): Observable<any> {
    const token = localStorage.getItem('token');
  console.log(token)
    if (token) {
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      console.log(headers)
      return this.http.post<any>(`${this.baseUrl}/add`, demande, { headers });
    } else {
      console.error('Le token n\'a pas été trouvé dans le stockage local');
      return of(null); 

    }
  }
  modifierDemande(id: number, demande: Demande): Observable<Demande> {
    return this.http.put<Demande>(`${this.baseUrl}/update/${id}`, demande);
  }

  supprimerDemande(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
  
  /*getDocumentsByDemandeId(iddemande: number): Observable<Demandedocument[]> {
    return this.http.get<Demandedocument[]>(`${this.baseUrl}/${iddemande}/documents`);
  }
*/
modifierEtatDemande(id: number, demande: Demande): Observable<any> {
  return this.http.put(`${this.baseUrl}/${id}/etat`, demande);
}
countDemandesByEtatDemande(idetatdemande: number): Observable<number> {
  return this.http.get<number>(`${this.baseUrl}/count/${idetatdemande}`); // URL complète pour récupérer le nombre de demandes par état
}
getTotalDemandsCount(): Observable<number> {
  return this.http.get<number>(`${this.baseUrl}/total`);
}



  }

