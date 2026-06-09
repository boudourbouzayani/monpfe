import { Component } from '@angular/core';
import { PanierService } from '../../services/panier.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2'; // Importer Swal depuis sweetalert2

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss'
})
export class PanierComponent {
  constructor(private panierService: PanierService, private http: HttpClient) { } // Importer PanierService et HttpClient ici

  // Méthode pour ajouter un produit au panier
  ajouterProduit(form: NgForm): void {
    const idproduit = form.value.idProduit;
    const idpanier = form.value.idPanier;
    console.log(idproduit);
    console.log(idpanier);    
    this.panierService.ajouterProduitAuPanier(idproduit, idpanier).subscribe(
      (response) => {
        console.log('Produit ajouté au panier avec succès');
        // Afficher le SweetAlert pour confirmer l'ajout
        Swal.fire({
          title: 'Produit ajouté au panier !',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du produit au panier:', error);
        // Traitez l'erreur si nécessaire
      }
    );
  }
}
