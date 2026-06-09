import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devi} from '../models/devi';


@Injectable({
  providedIn: 'root'
})
export class DeviService {

  private baseUrl = 'http://localhost:8080/devis'; 

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<Devi> {
    return this.http.get<Devi>(`${this.baseUrl}/${id}`);
  }

  getAll(): Observable<Devi[]> {
    return this.http.get<Devi[]>(`${this.baseUrl}/all`);
  }

  ajouterDevi(devis: Devi): Observable<Devi> {
    return this.http.post<Devi>(`${this.baseUrl}/add`, devis);
  }

  modifierDevi(id: number, devis: Devi): Observable<Devi> {
    return this.http.put<Devi>(`${this.baseUrl}/update/${id}`, devis);
  }

  supprimerDevi(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }



}
