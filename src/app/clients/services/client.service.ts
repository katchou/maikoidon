import { Injectable } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { fakeClient } from './fake-clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _collection: Client[];

  constructor() {
    this.collection = fakeClient;
  }

  public get collection(): Client[] {
    return this._collection;
  }

  public set collection(collection: Client[]) {
    this._collection = collection;
  }

  public update(item: Client, state: StateClient) {
    item.state = state;
  }
}
