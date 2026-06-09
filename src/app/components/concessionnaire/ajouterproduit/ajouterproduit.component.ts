import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Etatproduit } from 'src/app/models/etatproduit';
import { Marque } from 'src/app/models/marque';
import { Produit } from 'src/app/models/produit';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ProduitService } from 'src/app/services/produit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouterproduit',
  standalone: true,
  imports: [FormsModule, CommonModule], // Ajoutez CommonModule à vos imports
  templateUrl: './ajouterproduit.component.html',
  styleUrl: './ajouterproduit.component.scss'
})
export class AjouterproduitComponent {
  nouveauProduit: Produit = {
    apportpropre: 0,
    loyer: 0,
    remise: null,
    nombreAnnees: 0,
    prixpromotional: null,
    idproduit: 0,
    devise: 0,
    nomproduit: '',
    description: '', // Ajoutez la propriété description
    kilometrage: 0,
    disponibilite: '',
    carrosserie: '',
    garantie: '',
    nbplaces: '',
    nbportes: '',
    prixproduit: 0,
    image: '',
    modele: '',
    quantite: '',
    idetatproduit: {
      idetatproduit:1
    } as Etatproduit, // Initialisez idetatproduit avec un objet vide de type Etatproduit
    idutilisateur: {
      idutilisateur:1
    } as Utilisateur,
    idmarque:{
      idmarque:1
    } as Marque
  };

  constructor(private produitService: ProduitService) { }

  onSubmit(): void {
      this.produitService.ajouterProduit(this.nouveauProduit)
        .subscribe(() => {
          // Utilisation de Swal pour afficher un message de succès
          Swal.fire({
            icon: 'success',
            title: 'Succès',
            text: 'Produit ajouté avec succès'
          });
          // Réinitialisez le formulaire ou effectuez d'autres actions nécessaires après l'ajout du produit
        }, error => {
          // Utilisation de Swal pour afficher un message d'erreur
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Erreur lors de l\'ajout du produit'
          });
          console.error('Erreur lors de l\'ajout du produit :', error);
          // Gérez l'erreur de manière appropriée
        });

  }
}