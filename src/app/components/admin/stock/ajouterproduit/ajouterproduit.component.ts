import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Marque } from 'src/app/models/marque';
import { Produit } from 'src/app/models/produit';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-ajouterproduit',
  standalone: true,
  imports: [FormsModule, CommonModule], // Ajoutez CommonModule à vos imports
  templateUrl: './ajouterproduit.component.html',
  styleUrl: './ajouterproduit.component.scss'
})
export class AjouterproduitComponent {
}