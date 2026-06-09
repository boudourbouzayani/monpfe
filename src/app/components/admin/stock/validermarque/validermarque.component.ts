import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Marque } from 'src/app/models/marque';
import { MarqueService } from 'src/app/services/marque.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validermarque',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './validermarque.component.html',
  styleUrl: './validermarque.component.scss'
})
export class ValidermarqueComponent implements OnInit {
  marques: Marque[] = [];
produit: any;

  constructor(private marqueService: MarqueService,private utilisateurService:UtilisateurService) { }

  ngOnInit(): void {
    this.marqueService.getAllMarques().subscribe(
      (data: Marque[]) => {
        this.marques = data;
      },
      (error: any) => {
        console.log('Error fetching marques', error);
      }
    );
  }

  OnClickChangerEtat(idmarque: number, nouvelEtat:number): void {
    this.marqueService.modifierEtatMarque(idmarque, nouvelEtat).subscribe(
      () => {
        // Afficher une boîte de dialogue SweetAlert en cas de succès
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'État de la marque modifié avec succès!',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
      },
      (error) => {
        // Afficher une boîte de dialogue SweetAlert en cas d'erreur
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Erreur lors de la modification de l\'état de la marque: ' + error.message,
          confirmButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
      }
    );
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