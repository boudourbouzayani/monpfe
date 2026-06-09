import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Demande } from 'src/app/models/demande';
import { DemandeService } from 'src/app/services/demande.service';
import Swal from 'sweetalert2';
import { Utilisateur } from 'src/app/models/utilisateur'; // Importez le modèle de l'utilisateur
import { ProduitService } from 'src/app/services/produit.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';


@Component({
  selector: 'app-ajouterdemande',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './ajouterdemande.component.html',
  styleUrl: './ajouterdemande.component.scss'
})
  export class AjouterdemandeComponent {
    
    iddemande:any;
    date: any;
    montant: any;
    status:any;
    email:any;
    produit:any;
    marque:any;
    idutilisateur:any;
    description:any;
    prixproduit: any;
    loyer: any;
    apportpropre:any;
    
    demandeData={ 
      email: '',
      date: '',
      montant: '',
      produit:'',
      marque:'',
      status: '',
    
    };
  
   
  
    constructor(private demandeService: DemandeService, private route: ActivatedRoute, private router: Router,    private UtilisateurService: UtilisateurService,private produitService: ProduitService,
    ) {}

 
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Récupérer idrole depuis les paramètres de l'URL
    });
    this.route.queryParams.subscribe(params => {
      this.produit = params['produit'] || '';
      this.loyer = params['loyerActuel'] ? parseFloat(params['loyerActuel']) : null;
      this.apportpropre = params['apportPropre'] ? parseFloat(params['apportPropre']) : null;
      // Appeler une méthode pour charger les détails du produit lorsque l'ID du produit est disponible
      if (params['produit']) {
        const productId = params['produit'];
        this.loadProductName(productId);
      }
    });
  }
  
  loadProductName(productId: number): void {
    // Appel au service ProductService pour récupérer les détails du produit par son ID
    this.produitService.getById(productId).subscribe((product: any) => {
      this.produit = product.nomproduit; 
      this.prixproduit=product.prixproduit;
      // Mettre à jour le champ nomproduit avec le nom du produit récupéré
      
    
    
    });
  }
 /*
ajouterDemande(form: NgForm): void {
  // Envoyer la demande au service
  this.demandeService.ajouterDemande(form.value).subscribe(
    (newDemande: any) => {
      console.log('Demande ajoutée avec succès :', newDemande);
      // Afficher une boîte de dialogue de succès
      Swal.fire('Succès', 'Demande ajoutée avec succès', 'success');
        this.router.navigate(['/doc', newDemande.iddemande]);
      form.resetForm();
    },
    (error: any) => {
      console.error('Erreur lors de l\'ajout de la demande :', error);
      // Afficher une boîte de dialogue d'erreur
      Swal.fire('Erreur', 'Une erreur s\'est produite lors de l\'ajout de la demande', 'error');
                this.router.navigate(['/register']); // Assurez-vous d'ajuster le chemin selon votre routage

    }
  );
}



}*/
ajouterDemande(form: NgForm): void {
  // Envoyer la demande au service
  this.demandeService.ajouterDemande(form.value).subscribe(
    (newDemande: any) => {
      if (newDemande && newDemande.iddemande) {
        console.log('Demande ajoutée avec succès :', newDemande);
        // Afficher une boîte de dialogue de succès
        Swal.fire('Succès', 'Demande ajoutée avec succès', 'success');
        this.router.navigate(['/doc', newDemande.iddemande]);
        form.resetForm();
      } else {
        console.error('Réponse invalide du service lors de l\'ajout de la demande');
        // Afficher une boîte de dialogue d'erreur
        Swal.fire
        ('Erreur', 'il faut être authentifier ', 'error');
        this.router.navigate(['/register']); // Assurez-vous d'ajuster le chemin selon votre routage

      }
    },
    (error: any) => {
      console.error('Il faut etre Authentifier :', error);

      // Afficher une boîte de dialogue d'erreur
      Swal.fire('Erreur', 'Une erreur s\'est produite lors de l\'ajout de la demande', 'error');
      this.router.navigate(['/register']); // Assurez-vous d'ajuster le chemin selon votre routage
    }
  );
}
  }