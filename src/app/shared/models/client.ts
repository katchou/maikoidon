import { PrestationI } from '../interfaces/prestation-i';
import { States } from '../enums/state.enum';
import { ClientI } from '../interfaces/client-i';
import { StateClient } from '../enums/state-client.enum';

export class Client implements ClientI {
  id: string;
  nom: string;
  mail: string;
  numero: number;
  state: StateClient = StateClient.INACTIF;

  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
