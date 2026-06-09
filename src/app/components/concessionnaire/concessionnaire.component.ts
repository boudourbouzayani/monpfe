import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-concessionnaire',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './concessionnaire.component.html',
  styleUrl: './concessionnaire.component.scss'
})
export class ConcessionnaireComponent {
  images: string[] = ['https://www.shutterstock.com/image-photo/adult-man-customer-male-buyer-600nw-2395630627.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtfojLv5LkQGjSANjaRv-AnGDISCmXp5Vx3nHuE_QvnoiAsbH45Ra7Hceczmc00N6gEY&usqp=CAU', 
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtwN8e2c17KiBpLCLWCJ5H45GzKNbfnTHfXeMTzUiQkjL98-N3wxsKASpjmjZlM4ZUVM&usqp=CAU'];
  currentIndex = 0;
  utilisateurService: any;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 2000); // Change l'image toutes les 2 secondes (2000 ms)
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
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
