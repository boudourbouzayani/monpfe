import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifierutilisateur',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modifierutilisateur.component.html',
  styleUrls: ['./modifierutilisateur.component.scss']
})
export class ModifierutilisateurComponent implements OnInit {

  newUser: any;
  prenom!: string;
  nom!: string;
  email!: string;
  password!: string;
  telephone!: string;
  adresse!: string;
  ville!: string;
  codepostal!: string;
  datenaissance!: Date;
  userId: any;

  utilisateurModifie: Utilisateur | null = null; // Utilisateur modifié après la mise à jour

  constructor(private userService: UtilisateurService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur depuis les paramètres de l'URL (à mettre en place dans votre application)
    this.userId = this.route.snapshot.paramMap.get('id')!;

    // Appeler la méthode du service pour récupérer les détails de l'utilisateur
    this.userService.getUserById(this.userId).subscribe(
      (user: Utilisateur) => {
        console.log(user)
        this.utilisateurModifie = user;
        console.log(this.utilisateurModifie)
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des détails de l\'utilisateur :', error);
      }
    );
  }

  // Méthode pour mettre à jour l'utilisateur
  updateUser(form: NgForm): void {
    console.log(form.value)
    if (form.value) {
      this.userService.updateUser(this.userId, form.value).subscribe(
        (updatedUser: Utilisateur) => {
          this.utilisateurModifie = updatedUser;
          console.log('Utilisateur mis à jour :', updatedUser);
          Swal.fire('Succès !', 'L\'utilisateur a été mis à jour avec succès.', 'success');
        },
        (error: any) => {
          console.error('Erreur lors de la mise à jour de l\'utilisateur :', error);
          Swal.fire('Erreur !', 'Une erreur s\'est produite lors de la mise à jour de l\'utilisateur.', 'error');
        }
      );
    } else {
      console.error('Impossible de mettre à jour l\'utilisateur : aucune donnée fournie.');
    }
  }

}
