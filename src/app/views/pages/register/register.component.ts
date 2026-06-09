import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  prenom!: string;
  nom!: string;
  email!: string;
  password!: string;
  telephone!: string;
  adresse!: string;
  ville!: string;
  codepostal!: string;
  datenaissance!: Date;

  constructor(private authService: AuthenticationService) {}

  register(form: NgForm) {
    const userData = {
      prenom: this.prenom,
      nom: this.nom,
      email: this.email,
      telephone: this.telephone,
      adresse: this.adresse,
      ville: this.ville,
      codepostal: this.codepostal,
      datenaissance: this.datenaissance,
      password: this.password,
    };

    this.authService.register(userData).subscribe(
      (response) => {
        // Gérer la réponse du backend en cas de succès
        console.log('Inscription réussie');
        // Afficher un SweetAlert de succès
        Swal.fire({
          title: 'Inscription réussie',
          text: 'Vous êtes maintenant inscrit !',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        // Réinitialiser le formulaire après une inscription réussie
        form.resetForm();
      },
      (error) => {
        // Gérer les erreurs d'inscription
        console.error('Erreur lors de l\'inscription :', error);
        // Afficher un SweetAlert d'erreur
        Swal.fire({
          title: 'Erreur',
          text: 'Une erreur s\'est produite lors de l\'inscription',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }
}
