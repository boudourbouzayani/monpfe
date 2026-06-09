import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Marque } from 'src/app/models/marque';
import { Produit } from 'src/app/models/produit';
import { MarqueService } from 'src/app/services/marque.service';
import { ProduitService } from 'src/app/services/produit.service'; // Ajoutez l'import pour le service des produits

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.scss'
})
export class MarketplaceComponent {

  marques: Marque[] = [];
  produits: Produit[] = []; // Modifier la déclaration pour initialiser le tableau


  constructor(private marqueService: MarqueService, private produitService: ProduitService,private router: Router) { }

  redirectToDetails(id: number) {
    this.router.navigate(['/detailsproduit', id], { skipLocationChange: true });
  }
  ngOnInit(): void {
    // Récupération des marques
    this.marqueService.getAllValid().subscribe(
      (data: Marque[]) => {
        this.marques = data;
      },
      (error) => {
        console.log('Error fetching marques', error);
      }
    );

   // Récupération des produits avec idetatproduit=1
this.produitService.getAllValid().subscribe(
  (data: Produit[]) => {
    // Filtrer les produits avec idetatproduit=1 directement dans la requête
    this.produits = data.filter(produit => produit.idetatproduit.idetatproduit === 1);
  },
  (error) => {
    console.log('Error fetching produits', error);
  }
);

  }
 
}
