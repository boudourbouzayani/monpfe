import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulteradmin',
  templateUrl: './consulteradmin.component.html',
  standalone: true,
  imports: [RouterLink, CommonModule],
  styleUrls: ['./consulteradmin.component.scss']
})
export class ConsulteradminComponent implements OnInit {
  listAdmin: Utilisateur[] = [];
  private data = {
    idrole: 1
  };

  constructor(private utilisateurService: UtilisateurService, private router: Router) {}

  ngOnInit(): void {
    this.utilisateurService.getUsersByRoleId(this.data.idrole).subscribe(
      (response) => {
        console.log(response);
        this.listAdmin = response;
      },
      (error) => {
        console.error('Erreur lors de la récupération des administrateurs : ', error);
      }
    );
  }

  onLogout(): void {
    console.log('Déconnexion en cours...');
    this.utilisateurService.logout().subscribe(
      () => {
        console.log('Déconnexion réussie.');
        // Ajoutez ici d'autres actions après la déconnexion si nécessaire
        // Par exemple, redirigez vers une page de connexion
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Erreur lors de la déconnexion : ', error);
      }
    );
  }
  
  deleteUser(id: number): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Êtes-vous sûr de vouloir supprimer cet utilisateur ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        // Appel de la méthode de suppression de l'utilisateur
        this.utilisateurService.deleteUser(id).subscribe(
          () => {
            console.log(`Admin avec l'ID ${id} supprimé.`);
            // Mettre à jour l'affichage ou effectuer d'autres opérations après la suppression
            Swal.fire('Supprimé !', 'L\'admin a été supprimé.', 'success');
          },
          (error: any) => {
            console.error(`Erreur lors de la suppression de l'admin avec l'ID ${id} :`, error);
            Swal.fire('Erreur !', 'Une erreur s\'est produite lors de la suppression de l\'admin.', 'error');
          }
        );
      }
    });
  }
}
