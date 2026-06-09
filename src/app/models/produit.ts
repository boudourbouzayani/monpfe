import { Etatproduit } from "./etatproduit";
import { Marque } from "./marque";
import { Utilisateur } from "./utilisateur";

export interface Produit {
  apportpropre: number;
  loyer:number;
remise: any;
nombreAnnees:number
prixpromotional: any;
  idproduit: number;
  devise: number;
  nomproduit: string;
  description: string; // Ajoutez la propriété description
  idetatproduit: Etatproduit;
  kilometrage: number;
  disponibilite:string;
  carrosserie:string;
  garantie:string;
  nbplaces:string;
  nbportes:string;
  prixproduit: number;
  idutilisateur: Utilisateur;
  idmarque: Marque;
  image: string;
  modele: string;
  quantite: string;
}
