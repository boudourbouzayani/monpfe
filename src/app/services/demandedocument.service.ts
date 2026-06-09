import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Demandedocument } from '../models/demandedocument';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DemandedocumentService {
  private baseUrl = 'http://localhost:8080/demandesdocuments';

  constructor(private http: HttpClient) { }

  ajouterDocumentALaDemande(iddocument: number, iddemande: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(`${this.baseUrl}/ajouterDocumentALaDemande/${iddocument}/${iddemande}`, formData, { headers });
  }

  getDocumentsByDemandeId(iddemande: number): Observable<Demandedocument[]> {
    return this.http.get<Demandedocument[]>(`${this.baseUrl}/associationsByDemandeId/${iddemande}`);
  }
  getById(id: number): Observable<any> {
    const url = `http://localhost:8080/documents/${id}`;
    return this.http.get<any>(url);
  }

}
