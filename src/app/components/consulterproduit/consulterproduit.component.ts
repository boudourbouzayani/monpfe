import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-consulterproduit',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './consulterproduit.component.html',
  styleUrl: './consulterproduit.component.scss'
})
export class ConsulterproduitComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) { }
  ngOnInit(): void {
    this.produitService.getAll().subscribe(
      (produits: Produit[]) => {
        this.produits = produits;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    );
  }
  deleteProduit(id: number): void {
    this.produitService.deleteProduit(id).subscribe(
      () => {
        console.log('produit supprimé avec succès.');
        
      },
      (error: any) => {
        console.error('Erreur lors de la suppression du produit :', error);
      }
    );
  }
}
