import { RoleUtilisateur } from "./RoleUtilisateur";
import { EtatUtilisateur } from "./etatutilisateur";
export interface Utilisateur {
etatutilisateur: any;
  
  idutilisateur: number;
  idetatutilisateur: EtatUtilisateur; // Remplacez le type par le modèle correspondant si nécessaire
  idrole: RoleUtilisateur; // Remplacez le type par le modèle correspondant si nécessaire
  nom: string;
  prenom: string;
  email: string;
  password: string;
  codepostal: string;
  telephone: number;
  ville: string;
  adresse: string;
  datenaissance: Date;
  demandes: any[]; // Remplacez le type par le modèle correspondant si nécessaire
  produits: any[]; // Remplacez le type par le modèle correspondant si nécessaire
}
