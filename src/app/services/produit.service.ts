import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'http://localhost:8080/produits';

  constructor(private http: HttpClient) { }


  getProductsByMarqueId(idmarque: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/marque/${idmarque}`);
  }
 


  
  getById(id: number): Observable<Produit> {
    return this.http.get<Produit>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/all`);
  }

  ajouterProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(`${this.apiUrl}/add`, produit);
  }

  modifierProduit(id: number, produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.apiUrl}/update/${id}`, produit);
  }
  modifierEtatProduit(id: number, newProduit :any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/etat`, { newProduit });
  }
  getProduitsParEtat(etat: string): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/etat/${etat}`);
  }
  deleteProduit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
  getAllValid(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/attributeEqualsOne`);
  }


  getCountByEtatProduit(etatId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/countByEtatProduit/${etatId}`);
  }
}
