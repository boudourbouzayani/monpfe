import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Chart, registerables } from 'chart.js';
import { forkJoin } from 'rxjs';
import { DemandeService } from 'src/app/services/demande.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  totalUsers: number = 0;
  usersByRole: { roleId: number, count: number }[] = [];
  totalDemands: number = 0;
  demandesByEtat: { etat: string, count: number }[] = [];
  produitCounts: { count: number }[] = []; // Nombre de produits par état

  constructor(private utilisateurService: UtilisateurService, private demandeService: DemandeService ,   private produitService: ProduitService // Injectez le service ProduitService
) {}

  ngOnInit(): void {
    forkJoin({
      totalUsers: this.utilisateurService.getTotalUsersCount(),
      totalDemands: this.demandeService.getTotalDemandsCount(),
      usersByRole: forkJoin([1, 2, 3].map(roleId => this.utilisateurService.getCountByRoleId(roleId))),
      demandesByEtat: forkJoin([
        this.demandeService.countDemandesByEtatDemande(1), // État 1: Valide
        this.demandeService.countDemandesByEtatDemande(2), // État 2: Non valide
        this.demandeService.countDemandesByEtatDemande(3)  // État 3: En attente de validation
      ])
    }).subscribe(({ totalUsers, totalDemands, usersByRole, demandesByEtat }) => {
      this.totalUsers = totalUsers;
      this.totalDemands = totalDemands;
      this.usersByRole = usersByRole.map((count, index) => ({ roleId: index + 1, count }));
      this.demandesByEtat = [
        { etat: 'Valide', count: demandesByEtat[0] },
        { etat: 'Non valide', count: demandesByEtat[1] },
        { etat: 'En attente de validation', count: demandesByEtat[2] }
      ];
      this.createCharts();
    });
  }

  createCharts(): void {
    Chart.register(...registerables);
    this.createUsersChart();
    this.createDemandsByEtatChart();
  }

  createUsersChart(): void {
    const labels = ['Total Users', 'Administrateur', 'Concessionnaire', 'Utilisateur Simple'];
    const counts = [this.totalUsers, ...this.usersByRole.map(entry => entry.count)];
  
    const ctx = document.getElementById('usersChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Number of Users',
          data: counts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true, // Permet au graphique de s'adapter à la taille du conteneur
        maintainAspectRatio: false, // Permet au graphique de ne pas maintenir son aspect ratio
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
  createDemandsByEtatChart(): void {
    const labels = this.demandesByEtat.map(entry => entry.etat);
    const counts = this.demandesByEtat.map(entry => entry.count);
  
    const ctx = document.getElementById('demandsByEtatChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Number of Demands',
          data: counts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true, // Permet au graphique de s'adapter à la taille du conteneur
        maintainAspectRatio: false, // Permet au graphique de ne pas maintenir son aspect ratio
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  onLogout(): void {
    console.log('good morning')
    this.utilisateurService.logout().subscribe(
      () => {
        console.log('Déconnexion réussie.');
        // Ajoutez ici d'autres actions après la déconnexion si nécessaire
      },
      (error) => {
        console.error('Erreur lors de la déconnexion : ', error);
      }
    );
  }
}  