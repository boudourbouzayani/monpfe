import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from 'src/app/models/marque';
import { MarqueService } from 'src/app/services/marque.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifiermarque',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modifiermarque.component.html',
  styleUrl: './modifiermarque.component.scss'
})
export class ModifiermarqueComponent implements OnInit{
  nommarque  !:string;
  logomarque  !:string;
  idmarque :any;
produit: any;

  constructor(private marqueService: MarqueService, private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.idmarque = this.route.snapshot.paramMap.get('id');
    if (this.idmarque) {
      this.marqueService.getMarqueById(this.idmarque).subscribe(
        (marque: Marque) => {
          this.idmarque=marque.idmarque
          console.log('Marque récupérée :', marque);
          this.nommarque = marque.nommarque;
          this.logomarque = marque.logomarque;
          // Update other properties if needed
        },
        (error: any) => {
          console.error('Erreur lors de la récupération de la marque :', error);
        }
      );
    }
  }

  updateMarque(form: NgForm): void {
    if (form.valid && this.idmarque) {
      console.log(this.idmarque);
      this.marqueService.updateMarque(this.idmarque, form.value).subscribe(
        (updatedmarque: Marque) => {
          console.log('Marque modifiée :', updatedmarque);
          // Afficher un message de succès avec Swal
          Swal.fire({
            title: 'Marque modifiée !',
            text: 'La marque a été modifiée avec succès.',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          });
          // Add other actions if needed
        },
        (error: any) => {
          console.error('Erreur lors de la modification de la marque :', error);
          // Afficher un message d'erreur avec Swal
          Swal.fire({
            title: 'Erreur !',
            text: 'Une erreur est survenue lors de la modification de la marque.',
            icon: 'error',
            showConfirmButton: true
          });
        }
      );
    } else {
      console.error('Impossible de modifier la marque : le formulaire est invalide ou l\'ID de la marque est manquant.');
    }
  }
}