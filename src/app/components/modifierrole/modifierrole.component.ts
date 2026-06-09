import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router'; // Importez ActivatedRoute depuis '@angular/router'


import { RoleutilisateurService } from 'src/app/services/roleutilisateur.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { RoleUtilisateur } from 'src/app/models/RoleUtilisateur';


@Component({
  selector: 'app-modifierrole',
  templateUrl: './modifierrole.component.html',
  standalone: true,
  imports: [FormsModule,RouterLink],
  styleUrl: './modifierrole.component.scss'
})
export class ModifierroleComponent {

  label!:string;
  idrole:any;


  constructor(private roleutilisateurService: RoleutilisateurService,private utilisateurService:UtilisateurService ,   private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer l'ID du rôle depuis les paramètres de l'URL
    this.idrole = this.route.snapshot.paramMap.get('id');
    console.log('ID du rôle récupéré :', this.idrole);


    // Si vous devez également récupérer les détails du rôle depuis le service, vous pouvez le faire ici
    // Utilisez l'ID récupéré pour appeler la méthode du service pour récupérer les détails du rôle
    if (this.idrole) {
      this.roleutilisateurService.getById(Number(this.idrole)).subscribe(
        (role: RoleUtilisateur) => {
          console.log('Rôle récupéré :', role);
          // Vous pouvez mettre à jour les propriétés du formulaire avec les données récupérées
          this.label = role.label;
          // Mettez à jour d'autres propriétés si nécessaire
        },
        (error: any) => {
          console.error('Erreur lors de la récupération des détails du rôle :', error);
        }
      );
    }
  }



  modifierRole(form: NgForm): void {
    if (form.valid && this.idrole) { // Vérifiez si le formulaire est valide et si l'ID du rôle est disponible
      const role: RoleUtilisateur = { idrole: Number(this.idrole), label: this.label }; // Créez un objet Role avec les données du formulaire
      this.roleutilisateurService.modifierRole(role).subscribe(
        (updatedRole: RoleUtilisateur) => {
          console.log('Rôle modifié :', updatedRole);
          // Ajoutez ici d'autres actions si nécessaire (par exemple, naviguer vers une autre page)
        },
        (error: any) => {
          console.error('Erreur lors de la modification du rôle :', error);
        }
      );
    } else {
      console.error('Impossible de modifier le rôle : le formulaire est invalide ou l\'ID du rôle est manquant.');
    }
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