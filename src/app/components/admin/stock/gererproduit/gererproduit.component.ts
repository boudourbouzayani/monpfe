import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gererproduit',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gererproduit.component.html',
  styleUrls: ['./gererproduit.component.scss']
})
export class GererproduitComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService,private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.getAllProduits();
  }

  getAllProduits(): void {
    this.produitService.getAll().subscribe(
      (data: Produit[]) => {
        this.produits = data;
      },
      (error) => {
        console.log('Erreur lors de la récupération des produits', error);
      }
    );
  }

  deleteProduit(id: number): void {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Voulez-vous vraiment supprimer ce produit?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.produitService.deleteProduit(id).subscribe(
          () => {
            console.log('Produit supprimé avec succès.');
            Swal.fire({
              title: 'Produit supprimé !',
              text: 'Le produit a été supprimé avec succès.',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              // Rafraîchir la liste des produits après la suppression
              this.getAllProduits();
            });
          },
          (error: any) => {
            console.error('Erreur lors de la suppression du produit :', error);
            Swal.fire({
              title: 'Erreur !',
              text: 'Une erreur est survenue lors de la suppression du produit.',
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
