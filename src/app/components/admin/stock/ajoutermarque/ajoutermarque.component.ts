import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Marque } from 'src/app/models/marque';
import { MarqueService } from 'src/app/services/marque.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutermarque',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajoutermarque.component.html',
  styleUrl: './ajoutermarque.component.scss'
})
export class AjoutermarqueComponent {
  nommarque: any;
  logomarque: any;
  etatmarque: number = 1; // Initialisation de etatmarque à 2 par défaut

  constructor(private marqueService: MarqueService) {}

  addMarque(form: NgForm): void {
    console.log(form.value);
    // Créez un objet Marque avec les données du formulaire
    const marqueData = { ...form.value, etatmarque: this.etatmarque };
    this.marqueService.addMarque(marqueData).subscribe(
      (newMarque: Marque) => {
        console.log('marque ajouté :', newMarque);
        Swal.fire('Succès !', 'La marque a été ajoutée avec succès.', 'success');
        // Ajoutez ici d'autres actions si nécessaire (par exemple, naviguer vers une autre page)
      },
      (error: any) => {
        console.error('Erreur lors de l\'ajout de la marque :', error);
        Swal.fire('Erreur !', 'Une erreur s\'est produite lors de l\'ajout de la marque.', 'error');
      }
    );
  }
}