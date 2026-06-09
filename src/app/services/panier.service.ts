import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private apiUrl = 'http://localhost:8080/produitspaniers'
  constructor(private http: HttpClient) { }

  ajouterProduitAuPanier(idproduit: number, idpanier: number): Observable<any> {
    const url = `${this.apiUrl}/ajouterProduitAuPanier/${idproduit}/${idpanier}`;
    return this.http.post<any>(url, {});
  }
}
