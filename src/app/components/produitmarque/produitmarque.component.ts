import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute, RouterLink } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-produitmarque',
  templateUrl: './produitmarque.component.html',
  standalone: true,
  imports: [CommonModule,RouterLink],
  styleUrl: './produitmarque.component.scss'
})
export class ProduitmarqueComponent {
  produits: Produit[]=[];

  idmarque:any;

  
  constructor(private produitService: ProduitService , private route: ActivatedRoute) { }
 
 
  ngOnInit(): void {
    // Récupérer l'ID de la marque depuis l'URL
    //const idMarque = this.route.snapshot.params.idMarque;

    this.idmarque = this.route.snapshot.paramMap.get('id');
    console.log('ID du marque récupéré :', this.idmarque);


  
    // Utiliser l'ID de la marque pour récupérer les produits
    this.produitService.getProductsByMarqueId(this.idmarque).subscribe(
      produits => {
        console.log(produits)
        this.produits = produits;
      },
      error => {
        console.log('Erreur lors de la récupération des produits par marque : ', error);
      }
    );
  }


  
}
