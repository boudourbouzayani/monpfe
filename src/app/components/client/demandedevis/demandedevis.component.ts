import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { DeviService } from 'src/app/services/devi.service';
import { Devi } from 'src/app/models/devi';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-demandedevis',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './demandedevis.component.html',
  styleUrl: './demandedevis.component.scss'
})
export class DemandedevisComponent {

  produit:any;
  iddevis:any;
  datedevis:any;
  nomdev:any ;
prenomdev: any;
telephonedev:any ;
villedev: any;


  constructor(private route: ActivatedRoute , private devisService: DeviService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.produit = params['produit'];
    });
  }
  
  ajouterDevis(form: NgForm): void {
    // Vérifier si le formulaire est valide
    if (form.valid) {
      const newDevis: Devi = form.value as Devi;
      // Appeler le service pour ajouter le devis
      this.devisService.ajouterDevi(newDevis).subscribe(
        (response: Devi) => {
          console.log('Devis ajouté avec succès :', response);
          // Afficher une boîte de dialogue de succès
          Swal.fire('Succès', 'Devis ajouté avec succès', 'success');
          // Réinitialiser le formulaire après l'ajout réussi
          form.reset();
        },
        (error: any) => {
          console.error('Erreur lors de l\'ajout du devis :', error);
          // Afficher une boîte de dialogue d'erreur
          Swal.fire('Erreur', 'Une erreur s\'est produite lors de l\'ajout du devis', 'error');
        }
      );
    } else {
      // Afficher une boîte de dialogue d'avertissement si le formulaire est invalide
      Swal.fire('Attention', 'Veuillez remplir tous les champs obligatoires', 'warning');
    }
  }

}