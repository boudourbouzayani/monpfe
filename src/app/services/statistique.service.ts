import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  private baseUrl = 'http://localhost:8080'; // Déclaration de l'URL de base ici

  constructor(private http: HttpClient) { }

  getStatusStatistics(): Observable<any> {
    const url = `${this.baseUrl}/statistique/status`;
    return this.http.get<any>(url);
  }
}
