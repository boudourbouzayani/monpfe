import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    localStorage.removeItem("token")
  }
  /*
  email: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  login(form: NgForm) {
    const credentials = {
      email: this.email,
      password: this.password
    };
    console.log(credentials,'credentials')

    this.authService.authenticate(credentials).subscribe(
      (response) => {

        console.log(response)
        if (response && response.token){
        if (response.token=== 'admin'){
          this.router.navigate(['/admin']);
          console.log("rediriger vres l'interface d'administration");
        }
        if (response.token=== 'concessionnaire'){
          this.router.navigate(['/concessionnaire']);
          console.log("rediriger vres l'interface de concessionnaire");
        }
        else{
          console.log("rediriger vres l'interface utilisateur normale");
        }
      }else{
        console.log("Reponse invalid du backend ");

        }
   
        // Stocker le token dans le stockage local
        const token = response.token; // Supposons que votre réponse contient un champ 'token'
        this.authService.setToken(token); // Stocker le token dans le local storage
        this.authService.setToken(response.token);
        // Vous pouvez également rediriger l'utilisateur vers une autre page ici
      },
      (error) => {
        // Gérer les erreurs de connexion
        console.error('Erreur lors de la connexion :', error);
      }
    );
  }*/

 email: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  login(form: NgForm) {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.authService.authenticate(credentials).subscribe(
      (response) => {
        if (response && response.token) {
          localStorage.setItem("token", response.token);
          if (response.role === 'admin') {
            this.router.navigate(['/admin']);
          } else if (response.role === 'concessionnaire') {
            this.router.navigate(['/concessionnaire']);
          } else {
            // Redirection vers l'interface utilisateur normale
            console.log("redirection vers l'interface utilisateur normale");
          }

          // Stocker le token dans le local storage
          const token = response.token;
          this.authService.setToken(token);

          // Afficher un SweetAlert de connexion réussie
          Swal.fire({
            title: 'Succès',
            text: 'Connexion réussie !',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        } else {
          console.log("Réponse invalide du backend");
        }
      },
      (error) => {
        // Gérer les erreurs de connexion
        console.error('Erreur lors de la connexion :', error);

        // Afficher un SweetAlert d'erreur
        Swal.fire({
          title: 'Erreur',
          text: 'Une erreur s\'est produite lors de la connexion',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }
}
