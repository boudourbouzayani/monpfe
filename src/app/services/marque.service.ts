
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marque } from '../models/marque';
import { Utilisateur } from '../models/utilisateur';


@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  changerEtatMarque(idmarque: number, nouvelEtat: number) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8080/marques'; // Remplacez ceci par l'URL de votre backend

  constructor(private http: HttpClient) { }

  getAllMarques(): Observable<Marque[]> {
    return this.http.get<Marque[]>(`${this.baseUrl}/all`);
  }


  // Récupérer une marque par son ID
  getMarqueById(id: number): Observable<Marque> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Marque>(url);
  }

   // Ajouter une nouvelle marque
   addMarque(marque: Marque): Observable<Marque> {
    return this.http.post<Marque>(`${this.baseUrl}/add`, marque);
  }
  // Mettre à jour une marque existante

  // Méthode pour mettre à jour une marque
  updateMarque(id: number, marque: Marque): Observable<Marque> {
    return this.http.put<Marque>(`${this.baseUrl}/update/${id}`, marque);
  }
  modifierEtatMarque(id: number, nouvelEtat: number): Observable<Marque> {
    const url = `${this.baseUrl}/${id}/changeretat/${nouvelEtat}`;
    return this.http.put<Marque>(url, {});
  }
  // Supprimer une marque par son ID
  deleteMarque(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
  getAllValid(): Observable<Marque[]> {
    return this.http.get<Marque[]>(`${this.baseUrl}/attributeEqualsOne`);
  }
}
