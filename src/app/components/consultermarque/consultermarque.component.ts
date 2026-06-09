import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Marque } from 'src/app/models/marque';
import { MarqueService } from 'src/app/services/marque.service';

@Component({
  selector: 'app-consultermarque',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './consultermarque.component.html',
  styleUrl: './consultermarque.component.scss'
})
export class ConsultermarqueComponent implements OnInit {
  marques: Marque[] = [];

  constructor(private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.marqueService.getAllMarques().subscribe(
      (data: Marque[]) => {
        this.marques = data;
      },
      (error) => {
        console.log('Error fetching marques', error);
      }
    );
  }
}