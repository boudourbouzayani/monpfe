import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RoleUtilisateur } from 'src/app/models/RoleUtilisateur';
import { EtatUtilisateur } from 'src/app/models/etatutilisateur';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2'; // Importer SweetAlert

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './ajouter-utilisateur.component.scss'
})
export class AjouterUtilisateurComponent {
  newUser:any;
  prenom!: string;
  nom!: string;
  email!: string;
  password!: string;
  telephone !: string;
  adresse !: string;
  ville !:string;
  codepostal !:string;
  datenaissance !:Date;
  idrole !:string;
  idetatutilisateur : EtatUtilisateur = { idetatutilisateur: 1, labeletatutilisateur: "Actif" };

  utilisateurs: Utilisateur[] = [];

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit(): void {
    // Vous pouvez appeler ici d'autres méthodes pour initialiser votre composant
  }

  selectRole(roleId: string): void {
    this.idrole = roleId;
  }

  // Méthode pour ajouter un utilisateur
  addUser(form: NgForm): void {
    const user = form.value;
    if(this.idrole=="admin"){
      user.idrole = {label:"admin", idrole:1}
    }else if(this.idrole=="concessionnaire"){
      user.idrole = {label:"concessionnaire", idrole:2}
    }else if (this.idrole== "utilisateur normale"){
      user.idrole = {label:"utilisateur", idrole:3}
    }
    console.log(user)

    user.idetatutilisateur = { idetatutilisateur: 1, labeletatutilisateur: "Actif" };

    this.utilisateurService.addUser(user).subscribe(
      (addedUser: Utilisateur) => {
        // Afficher une alerte SweetAlert pour confirmer l'ajout de l'utilisateur
        Swal.fire('Succès', 'Utilisateur ajouté avec succès', 'success');
        
        // Ajouter le nouvel utilisateur à la liste des utilisateurs
        this.utilisateurs.push(addedUser);
      },
      (error: any) => {
        // Afficher une alerte SweetAlert en cas d'erreur lors de l'ajout de l'utilisateur
        Swal.fire('Erreur', 'Une erreur est survenue lors de l\'ajout de l\'utilisateur', 'error');
        
        // Gérer les erreurs en cas de problème lors de l'ajout de l'utilisateur
        console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
      }
    );
  }
}
