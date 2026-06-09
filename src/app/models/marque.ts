import { Produit } from './produit'; // Assurez-vous que le chemin relatif est correct en fonction de l'emplacement du fichier Produit.ts

export interface Marque {
  idetatproduit: number;
etatmarque: any;
    idmarque: number;
    nommarque: string;
    logomarque: string;
    produits: Produit[]; // Remplacer Produit[] par le type approprié si nécessaire
  }