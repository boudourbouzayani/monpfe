import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { from } from 'rxjs';
import { Marque } from 'src/app/models/marque';
import { MarqueService } from 'src/app/services/marque.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutermarque',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './ajoutmarque.component.html',
  styleUrl: './ajoutmarque.component.scss'
})
export class AjoutmarqueComponent {

    nommarque: any;
    logomarque: any;
    etatmarque: number = 2; // Initialisation de etatmarque à 2 par défaut
  utilisateurService: any;
  
    constructor(private marqueService: MarqueService) {}
  
    addMarque(form: NgForm): void {
      console.log(form.value);
      // Créez un objet Marque avec les données du formulaire
      const marqueData = { ...form.value, etatmarque: this.etatmarque };
      this.marqueService.addMarque(marqueData).subscribe(
        (newMarque: Marque) => {
          console.log('marque ajouté :', newMarque);
          Swal.fire('Succès !', 'La marque est en attente de validation de l\'administrateur.', 'success');
          // Ajoutez ici d'autres actions si nécessaire (par exemple, naviguer vers une autre page)
        },
        (error: any) => {
          console.error('Erreur lors de l\'ajout de la marque :', error);
          Swal.fire('Erreur !', 'Une erreur s\'est produite lors de l\'ajout de la marque.', 'error');
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