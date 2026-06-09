import { Demande } from './demande';

export interface Devi {
  numdevis: number;
  datedevis: Date;
  demandes: Demande[];
  produit: any;
  nomdev: any;
  prenomdev: any;
  telephonedev: any;
  villedev: any;
}
