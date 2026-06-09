import { Demande } from './demande';

export interface Document {
  iddocument: number;
  demandes: Demande[];
  typedocument: string;
  cheminfichier: string;
}
