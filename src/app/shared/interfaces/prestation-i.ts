import { States } from '../enums/state.enum';

export interface PrestationI {
  id: string;
  typePresta: string;
  client: string;
  nbJours: number;
  tjmHt: number;
  tauxTva: number;
  state: States;
  commentaires: string;
  totalHT(): number;
  totalTTC(): number;
}
