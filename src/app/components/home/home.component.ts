// home.component.ts
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  utilisateurs!: Utilisateur[];

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    const idrole = 1; // Remplacez ceci par l'ID du rôle que vous souhaitez récupérer
    this.utilisateurService.getUsersByRoleId(idrole)
      .subscribe(
        (utilisateurs: Utilisateur[]) => {
          this.utilisateurs = utilisateurs;
          // Traitez les données des utilisateurs récupérées si nécessaire
        },
        (error: any) => {
          console.error('Erreur lors de la récupération des utilisateurs par rôle : ', error);
          // Gérer l'erreur, afficher un message, ou effectuer d'autres actions en cas d'erreur
        }
      );
  }
}

  /*constructor(private utilisateurService: UtilisateurService, private router: Router) {}
  navigateToHome() {
    this.router.navigate(['']);
  }
  ngOnInit(): void {
    const idrole = 1;
    this.utilisateurService.getUsersByRoleId(idrole).subscribe(
      data => {
        this.utilisateurs = data;
      },
      error => {
        console.error('Error fetching users:', error);
        // Handle error, show a message, or perform other actions on error
      }
    );
  }*/



