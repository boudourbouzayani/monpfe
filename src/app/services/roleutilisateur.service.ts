import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleUtilisateur } from '../models/RoleUtilisateur';


@Injectable({
  providedIn: 'root'
})
export class RoleutilisateurService {
  private apiUrl = 'http://localhost:8080/roles'; // URL de votre service backend

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<RoleUtilisateur> {
    return this.http.get<RoleUtilisateur>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<RoleUtilisateur[]> {
    return this.http.get<RoleUtilisateur[]>(`${this.apiUrl}/all`);
  }

  ajouterRole(role: RoleUtilisateur): Observable<RoleUtilisateur> {
    return this.http.post<RoleUtilisateur>(`${this.apiUrl}/add`, role);
  }

  modifierRole(role: RoleUtilisateur): Observable<RoleUtilisateur> {
    return this.http.put<RoleUtilisateur>(`${this.apiUrl}/update/${role.idrole}`, role);
  }

  supprimerRole(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}