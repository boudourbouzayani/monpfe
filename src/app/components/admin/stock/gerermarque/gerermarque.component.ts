import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Marque } from 'src/app/models/marque';
import { MarqueService } from 'src/app/services/marque.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gerermarque',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './gerermarque.component.html',
  styleUrl: './gerermarque.component.scss'
})
export class GerermarqueComponent {
  marques: Marque[] = [];
  getAllMarques: any;
  marqueId!: number;
  nouvelleMarque!: Marque;

  constructor(private marqueService: MarqueService,private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.marqueService.getAllMarques().subscribe(
      (data: Marque[]) => {
        this.marques = data;
      },
      (error) => {
        console.log('Error fetching marques', error);
      }
    );
  }
  deleteMarque(id: number): void {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Voulez-vous vraiment supprimer cette marque?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.marqueService.deleteMarque(id).subscribe(
          () => {
            console.log('Marque supprimée avec succès.');
            Swal.fire({
              title: 'Marque supprimée!',
              text: 'La marque a été supprimée avec succès.',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              // Rafraîchir la liste des marques après la suppression
              this.getAllMarques();
            });
          },
          (error: any) => {
            console.error('Erreur lors de la suppression de la marque :', error);
            Swal.fire({
              title: 'Erreur!',
              text: 'Une erreur est survenue lors de la suppression de la marque.',
              icon: 'error',
              showConfirmButton: true
            });
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