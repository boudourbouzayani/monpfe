import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RoleUtilisateur } from 'src/app/models/RoleUtilisateur';
import { RoleutilisateurService } from 'src/app/services/roleutilisateur.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-consulterrole',
  templateUrl: './consulterrole.component.html',
  standalone: true,
  imports: [RouterLink,CommonModule],
  styleUrl: './consulterrole.component.scss'
})
export class ConsulterroleComponent implements OnInit {
 
  roles: RoleUtilisateur[] = [];
  constructor(private roleutilisateurService: RoleutilisateurService, private utilisateurService: UtilisateurService ) { }
 
  ngOnInit(): void {
    // Appelez la méthode getAll() du service pour récupérer tous les rôles
    this.roleutilisateurService.getAll().subscribe(
      (roles: RoleUtilisateur[]) => {
        // Utilisez les données récupérées comme nécessaire
        this.roles=roles;
      },
      (error: any) => {
        // Gérez les erreurs éventuelles
        console.error('Erreur lors de la récupération des rôles :', error);
      }
    );
  }


  supprimerRole(id: number): void {
    // Utilisez SweetAlert pour afficher une boîte de dialogue de confirmation avant de supprimer le rôle
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Cette action est irréversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si l'utilisateur confirme, appelez la méthode de suppression du service
        this.roleutilisateurService.supprimerRole(id).subscribe(
          () => {
            console.log('Rôle supprimé avec succès.');
            // Affichez une alerte de confirmation
            Swal.fire(
              'Supprimé!',
              'Le rôle a été supprimé.',
              'success'
            );
          },
          (error: any) => {
            console.error('Erreur lors de la suppression du rôle :', error);
            // Affichez une alerte d'erreur
            Swal.fire(
              'Erreur!',
              'Une erreur est survenue lors de la suppression du rôle.',
              'error'
            );
          }
        );
      }
    });
  }
  onLogout(): void {
    console.log('good morning')
    this.utilisateurService.logout().subscribe(
      () => {
        console.log('Déconnexion réussie.');
        // Ajoutez ici d'autres actions après la déconnexion si nécessaire
      },
      (error) => {
        console.error('Erreur lors de la déconnexion : ', error);
      }
    );
  }



}