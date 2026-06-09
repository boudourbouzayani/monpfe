import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Demande } from 'src/app/models/demande';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-consulterdemande',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './consulterdemande.component.html',
  styleUrl: './consulterdemande.component.scss'
})
export class ConsulterdemandeComponent {

  demandes: Demande[] = [];

  constructor(private demandeService: DemandeService) { }
  ngOnInit(): void {
    this.getAllDemandes();
  }

  getAllDemandes(): void {
    this.demandeService.getAll().subscribe(
      (demandes: Demande[]) => {
        this.demandes = demandes;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des demandes:', error);
      }
    );
  }
}