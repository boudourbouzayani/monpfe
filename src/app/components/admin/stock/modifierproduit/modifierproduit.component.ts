import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'appa-modifierproduit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modifierproduit.component.html',
  styleUrl: './modifierproduit.component.scss'
})
export class ModifierproduitComponent implements OnInit {
  produit: any; // Initialisez produit avec null
  idproduit: any; // Initialisez idProduit avec null
  

  constructor(private produitService: ProduitService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérez l'ID du produit à partir des paramètres de l'URL
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.idproduit = idParam ? +idParam : null; // Convertir l'ID du produit en nombre ou null si non défini
    });

    // Utilisez l'ID pour récupérer les détails du produit et afficher dans le formulaire
    if (this.idproduit !== null) {
      this.produitService.getById(this.idproduit).subscribe(
        (produit: Produit) => {
          console.log('Produit récupéré :', produit);
          this.produit = produit;
        },
        (error: any) => {
          console.error('Erreur lors de la récupération du produit :', error);
        }
      );
    } else {
      console.error('ID du produit manquant.');
    }
  }

 
  modifierProduit(form: NgForm): void {
    console.log(form.value);
    if (form.valid && this.idproduit !== null) { // Vérifiez que le formulaire est valide et que l'ID du produit est défini
      this.produitService.modifierProduit(this.idproduit, form.value).subscribe(
        (updatedproduit: Produit) => {
          console.log('Produit mis à jour :', updatedproduit);
          // Afficher un message de succès avec Swal
          Swal.fire({
            title: 'Produit mis à jour !',
            text: 'Le produit a été mis à jour avec succès.',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          });
          // Ajoutez ici d'autres actions si nécessaire
        },
        (error: any) => {
          console.error('Erreur lors de la mise à jour du produit :', error);
          // Afficher un message d'erreur avec Swal
          Swal.fire({
            title: 'Erreur !',
            text: 'Une erreur est survenue lors de la mise à jour du produit.',
            icon: 'error',
            showConfirmButton: true
          });
        }
      );
    } else {
      console.error('Impossible de mettre à jour le produit : le formulaire est invalide ou l\'ID du produit est manquant.');
    }
  }
}