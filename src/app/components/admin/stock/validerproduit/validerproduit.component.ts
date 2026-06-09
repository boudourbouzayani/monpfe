import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2'; // Importer Swal depuis sweetalert2

@Component({
  selector: 'app-validerproduit',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './validerproduit.component.html',
  styleUrl: './validerproduit.component.scss'
})
export class ValiderproduitComponent {
  produits: Produit[]=[];

  idmarque:any;
  newEtat:any;
  Activer : any;

  
  constructor(private produitService: ProduitService , private route: ActivatedRoute,private utilisateurService: UtilisateurService) {
     this.newEtat = {
    idetatproduit :2,
    labelleetatproduit:"refuse"
  }

    this.Activer = {
      idetatproduit: 1,
      labelleetatproduit:"valide"
    };
  }
 /*
  ngOnInit(): void {
    this.idmarque = this.route.snapshot.paramMap.get('id');
  
    this.produitService.getProduitsParEtat(this.idmarque).subscribe(
      produits => {
        this.produits = produits;
      },
      error => {
        console.log('Erreur lors de la récupération des produits par marque : ', error);
      }
    );
  }*/
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


  


  onActiver(id:number,produit:Produit){
    console.log(id)
    produit.idetatproduit=this.Activer;
    
    this.produitService.modifierEtatProduit(id,produit).subscribe(response=>{
      Swal.fire({
        title: 'Produit activé !',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }


 onDesactiver(id:any,produit:Produit){
  console.log(id)
    produit.idetatproduit=this.newEtat;
   
    this.produitService.modifierEtatProduit(id,produit).subscribe(response=>{
      Swal.fire({
        title: 'Produiat désactivé !',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
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
