import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Demande } from 'src/app/models/demande'; // Assurez-vous d'importer votre modèle Demande
import { DemandeService } from 'src/app/services/demande.service'; // Importez votre service de demande
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validerdemande',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './validerdemande.component.html',
  styleUrls: ['./validerdemande.component.scss']
})
export class ValiderDemandeComponent {
  demandes: Demande[] = [];
  newEtat: any;
  valider: any;

  constructor(private demandeService: DemandeService, private route: ActivatedRoute, private utilisateurService: UtilisateurService) {}
  ngOnInit(): void {
    this.demandeService.getAll().subscribe(
      (data: Demande[]) => {
        this.demandes = data;
      },
      (error: any) => {
        console.log('Error fetching marques', error);
      }
    );
  
  
  this.newEtat = {
      idetatdemande: 2,
      labeletat: "refuse"
    };

    this.valider = {
      idetatdemande: 1,
      labeletat: "valide"
    };
  }


  onValider(id: number) {
    this.demandeService.modifierEtatDemande(id, this.valider).subscribe(response => {
      Swal.fire({
        title: 'Demande validée !',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }

  onRefuser(id: number) {
    this.demandeService.modifierEtatDemande(id, this.newEtat).subscribe(response => {
      Swal.fire({
        title: 'Demande refusée !',
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