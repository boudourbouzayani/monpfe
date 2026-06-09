/*export interface Demande {
  iddemande: number;
  idutilisateur: number; // Assurez-vous que l'ID de l'utilisateur est inclus
  idetatdemade: number; // Assurez-vous que l'ID de l'état de la demande est inclus
  numdevis: number; // Assurez-vous que l'ID du devis est inclus
  date: string;
  montant: string;
  produit:string;
  description:string;
  marque:string;
  status: string;
  apportpropre:number
  loyer:number
  nomproduit:string
  prixproduit:string
}*/
import { Etatdemande } from './etatdemande';
export interface Demande {
  iddemande: number;
  idutilisateur: number; // Assurez-vous que l'ID de l'utilisateur est inclus
  idetatdemande: Etatdemande; // Utilisez Etatdemande au lieu de number
  numdevis: number; // Assurez-vous que l'ID du devis est inclus
  date: string;
  montant: string;
  produit: string;
  description: string;
  marque: string;
  status: string;
  apportpropre: number;
  loyer: number;
  nomproduit: string;
  prixproduit: string;
}
