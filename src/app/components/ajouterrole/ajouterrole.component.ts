import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RoleUtilisateur } from 'src/app/models/RoleUtilisateur';
import { RoleutilisateurService } from 'src/app/services/roleutilisateur.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';



@Component({
  selector: 'app-ajouterrole',
  templateUrl: './ajouterrole.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  styleUrl: './ajouterrole.component.scss'
})
export class AjouterroleComponent {

  label !:string;
  idrole:any;
  utilisateurService: any;


  constructor(private roleService: RoleutilisateurService , private utilisateuroService: UtilisateurService  ) { }

  
  ajouterRole(form:NgForm): void {
    // Créez un objet Role avec les données du formulaire
    this.roleService.ajouterRole(form.value).subscribe(
      (newRole: RoleUtilisateur) => {
        console.log('Rôle ajouté :', newRole);
        // Ajoutez ici d'autres actions si nécessaire (par exemple, naviguer vers une autre page)
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout du rôle :', error);
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
      (error: any) => {
        console.error('Erreur lors de la déconnexion : ', error);
      }
    );
  }

}