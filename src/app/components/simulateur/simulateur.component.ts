import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { SimulerService } from 'src/app/services/simulerservice.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-simulateur',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './simulateur.component.html',
  styleUrl: './simulateur.component.scss'
})
export class SimulateurComponent {
  nombreAnnees: number=7;
  apportPropre: any;
  produit: any;
  productId:any;

  constructor(private route: ActivatedRoute , private SimulerService: SimulerService,private  ProduitService: ProduitService) { }

 
  ngOnInit() {
    // Récupérer l'ID du produit à partir de l'URL
    this.route.queryParams.subscribe(params => {
      this.productId = params['produit'];
      console.log('ID du produit : ', this.productId);
  
      // Charger les détails du produit depuis votre service
      this.ProduitService.getById(this.productId).subscribe((produit: Produit) => {
        this.produit = produit;
        // Initialiser l'apport propre avec la valeur du produit
        this.apportPropre = produit.apportpropre;
      });
    });
  }
  
 

 /* modifierLoyer() {
    // Appeler le service pour modifier le loyer
    this.SimulateurService.modifierLoyerMensuel(this.nombreAnnees, this.produit, this.apportPropre)
      .subscribe((nouveauLoyer: number) => {
        // Mettre à jour le loyer dans l'objet produit si nécessaire
        this.produit.loyer = nouveauLoyer;
        console.log("modification du loyer")
      });
  }

  
  modifierApportPropre() {
    
    this.SimulateurService.modifierApportPropre(this.produit.idProduit, this.apportPropre, this.nombreAnnees)
      .subscribe((nouvelApportPropre: number) => {
        this.produit.apportpropre = nouvelApportPropre;
        console.log("Apport propre modifié avec succès !");
      }, error => {
        console.error("Une erreur s'est produite lors de la modification de l'apport propre :", error);
      });
  }*/
  
modifierLoyer() {
  console.log(this.apportPropre,'apport propre');
  console.log(this.nombreAnnees,'nb annee');

  this.SimulerService.modifierLoyerMensuel(this.nombreAnnees, this.produit, this.apportPropre)
  
    .subscribe((nouveauLoyer: number) => {
      const tempProduit = { ...this.produit }; 
      tempProduit.loyer = nouveauLoyer;
      this.produit = tempProduit;
      console.log("modification du loyer");
    });
}

modifierApportPropre() {
  this.SimulerService.modifierApportPropre(this.apportPropre, this.produit, this.nombreAnnees)
    .subscribe((nouvelApportPropre: number) => {
      const tempProduit = { ...this.produit }; // Créer une copie temporaire de l'objet produit
      tempProduit.apportpropre = nouvelApportPropre;
      this.produit = tempProduit; // Mettre à jour l'objet produit avec la copie temporaire
      console.log("Apport propre modifié avec succès !");
    }, error => {
      console.error("Une erreur s'est produite lors de la modification de l'apport propre :", error);
    });
}

  modifierApportPropreEtLoyer() {
    console.log(this.nombreAnnees);
    this.SimulerService.modifierApportPropre(this.apportPropre, this.produit, this.nombreAnnees)
      .subscribe((reponse) => {
        console.log(reponse)
        this.apportPropre = reponse;
    //this.produit.loyer=
        this.modifierLoyer();
        //this.ProduitService.getById(this.productId).subscribe((produit: Produit) => {
        //  this.produit = produit;
          // Initialiser l'apport propre avec la valeur du produit
        //  this.apportPropre = produit.apportpropre;
        });
     
  }
}

