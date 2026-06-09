import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-supprimerutilisateur',
  standalone: true,
  imports: [RouterLink,CommonModule],

  templateUrl: './supprimerutilisateur.component.html',
  styleUrls: ['./supprimerutilisateur.component.scss']
})
export class SupprimerutilisateurComponent implements OnInit {

  utilisateur: Utilisateur | null = null;
  userId: any;

  constructor(private userService: UtilisateurService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');

    this.userService.getUserById(this.userId).subscribe(
      (user: Utilisateur) => {
        this.utilisateur = user;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des détails de l\'utilisateur :', error);
      }
    );
  }

  deleteUser(): void {
    if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
      this.userService.deleteUser(this.userId).subscribe(
        () => {
          console.log('Utilisateur supprimé avec succès');
          this.router.navigate(['/liste-utilisateurs']);
        },
        (error: any) => {
          console.error('Erreur lors de la suppression de l\'utilisateur :', error);
        }
      );
    }
  }
}
