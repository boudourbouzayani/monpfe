import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Token } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8080/api/v1/auth'; // Remplacez ceci par l'URL de votre backend Spring Boot


  //ajouter le soir 
private tokenKey = 'access_token'; // Clé utilisée pour stocker le token dans le localStorage
res!: Token;


  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }

  authenticate(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/authenticate`, credentials).pipe(
      map(Response=>{
        if(Response){
        return Response
      }
      
      else{
        return null;
      }
    })
    );
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  get Token(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

 // Ajoutez votre logique d'authentification ici
 isLoggedIn(): boolean {
  // Votre logique pour vérifier si l'utilisateur est authentifié
  // Retourne vrai si l'utilisateur est authentifié, sinon faux
  // Par exemple, vous pouvez vérifier si l'utilisateur a un jeton d'authentification valide
  return localStorage.getItem('accessToken') !== null; // Exemple simple avec stockage local
}

}
