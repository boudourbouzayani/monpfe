import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class SimulerService {

  private baseUrl = 'http://localhost:8080/simuler'; // Remplacez cette URL par l'URL de votre backend

  constructor(private http: HttpClient) { }

 
  modifierLoyerMensuel(nombreAnnees: number, produitDto: any, nouvelApportPropre: any): Observable<number> {
    const url = `${this.baseUrl}/modifier?nombreAnnees=${nombreAnnees}&nouvelApportPropre=${nouvelApportPropre}`;
    return this.http.put<number>(url, produitDto);
  }


 modifierApportPropre(nouvelApportPropre: number, produitDto: any, nombreAnnees: number): Observable<number> {
    const url = `${this.baseUrl}/modifierApportPropre/${produitDto.idproduit}?nouvelApportPropre=${nouvelApportPropre}&nombreAnnees=${nombreAnnees}`;
    return this.http.put<number>(url, produitDto);
  }

}
