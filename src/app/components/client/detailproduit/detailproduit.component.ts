import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-detailproduit',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './detailproduit.component.html',
  styleUrl: './detailproduit.component.scss'
})
export class DetailsproduitComponent {

  produit!: Produit;
  prixproduit: number | undefined; 
  caracteristique : string   | undefined;
  nbportes :number | undefined;
  nbplaces: number | undefined;
  garantie : number | undefined;
  carrosserie : string   | undefined;
  nomproduit:any;


  constructor(private route: ActivatedRoute, private produitService: ProduitService , private router: Router ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produitService.getById(parseInt(id, 10)).subscribe(
        response => {
          console.log(response)
          this.produit = response;
        },
        error => {
          console.error('Erreur lors de la récupération des détails du produit : ', error);
        }
        
      );
    }
  }

  onDemandeFinancementClick(produit: Produit): void {
    // Naviguer vers le formulaire de demande de financement avec les noms de produit et de marque en tant que paramètres de requête
    this.router.navigate(['/ajouterdemande'], { queryParams: { produit: produit.nomproduit, marque:produit.idmarque  } });
  }
  

}