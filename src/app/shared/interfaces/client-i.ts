import { StateClient } from '../enums/state-client.enum';

export interface ClientI {
  id: string;
  nom: string;
  mail: string;
  numero: number;
  state: StateClient;
}
