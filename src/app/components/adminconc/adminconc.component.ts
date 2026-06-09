import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminconc',
  templateUrl: './adminconc.component.html',
  standalone: true,
  imports: [RouterLink, CommonModule],
  styleUrls: ['./adminconc.component.scss']
})
export class AdminconcComponent implements OnInit {
  listConcessionnaire!: Utilisateur[];
  private data: { idrole: number };

  constructor(private utilisateurService: UtilisateurService) {
    this.data = {
      idrole: 2
    };
  }

  ngOnInit(): void {
    this.utilisateurService.getUsersByRoleId(this.data).subscribe(response => {
      console.log(response)
      this.listConcessionnaire = response;
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
            console.log(`concessionnaire avec l'ID ${id} supprimé.`);
            // Mettre à jour l'affichage ou effectuer d'autres opérations après la suppression
            Swal.fire('Supprimé !', 'Le concessionnaire a été supprimé.', 'success');
          },
          (error: any) => {
            console.error(`Erreur lors de la suppression de concessionnaire avec l'ID ${id} :`, error);
            Swal.fire('Erreur !', 'Une erreur s\'est produite lors de la suppression de concessionnaire.', 'error');
          }
        );
      }
    });
  }
}
