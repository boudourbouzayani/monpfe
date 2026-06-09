import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  templateUrl: './utilisateur.component.html',
  imports: [RouterLink,CommonModule],

  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  utilisateurs : Utilisateur[]  =[] ;
  newEtat:any;
  activer:any;
  

  constructor(private utilisateurService: UtilisateurService) { 
    this.newEtat = {
      idetatutilisateur: 2,
      labeletatutilisateur:"inactif"
    };
    this.activer = {
      idetatutilisateur: 1,
      labeletatutilisateur:"Actif"
    };
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

  ngOnInit(): void {
    this.utilisateurService.getUsers().subscribe(users => { 
      console.log(users);
      this.utilisateurs = users;
    });
  }
  onActiver(id: any, utilisateur: Utilisateur) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir activer cet utilisateur ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Oui, activer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        utilisateur.idetatutilisateur = this.activer;
        this.utilisateurService.updateEtat(id, utilisateur).subscribe(response => {
          Swal.fire('Utilisateur activé avec succès', '', 'success');
          console.log(response);
        });
      }
    });
  }
  
  onDesactiver(id: any, utilisateur: Utilisateur) {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir désactiver cet utilisateur ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Oui, désactiver',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        utilisateur.idetatutilisateur = this.newEtat;
        this.utilisateurService.updateEtat(id, utilisateur).subscribe(response => {
          Swal.fire('Utilisateur désactivé avec succès', '', 'success');
          console.log(response);
        });
      }
    });
  }
}  