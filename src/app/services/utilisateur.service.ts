import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  // this.http.post('http://localhost:8081/api/v1/auth/logout', {}).subscribe(
  // () => {
  // Gérer le succès du logout
  // console.log('Déconnexion réussie.');
  //},
  //(error) => {
  // Gérer les erreurs de logout
  // console.error('Erreur lors de la déconnexion : ', error);
  //}
  //);
  // }


  private apiUrl = 'http://localhost:8080/utilisateurs'; // URL de votre service backend

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.apiUrl}/all`);
  }

  getTotalUsersCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total`);
  }
  getUserById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiUrl}/${id}`);
  }

  addUser(user: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${this.apiUrl}/add`, user);
  }

  updateUser(userId:number,user: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.apiUrl}/update/${userId}`,user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getUsersByRoleId(data:any): Observable<Utilisateur[]> {
    return this.http.post<Utilisateur[]>(`${this.apiUrl}/conc`,data);
  }
  updateEtat(id:number,user: Utilisateur): Observable<Utilisateur> {
    console.log(id)
    return this.http.post<Utilisateur>(`${this.apiUrl}/${id}/etat`, user);
  }
  
  getTotalUtilisateurs() {
    return this.http.get<number>(`${this.apiUrl}/total`); // Utiliser l'URL complète pour la requête HTTP
  }
  getCountByRoleId(roleId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/countbyrole/${roleId}`);
  }

  //onLogout(): void{
    //return this.http.post('http://localhost:8081/api/v1/auth/logout');

   // this.http.post('http://localhost:8081/api/v1/auth/logout', {}).subscribe(
     // () => {
        // Gérer le succès du logout
       // console.log('Déconnexion réussie.');
      //},
      //(error) => {
        // Gérer les erreurs de logout
       // console.error('Erreur lors de la déconnexion : ', error);
      //}
    //);


    
 // }


  logout(): Observable<any> {
    return this.http.get('http://localhost:8080/api/v1/auth/logout', {});
  }





}
