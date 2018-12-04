import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestation } from './fake-prestations';
import { States } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private _collection: Prestation[];

  constructor() {
    this.collection = fakePrestation;
  }

  public get collection(): Prestation[] {
    return this._collection;
  }

  public set collection(collection: Prestation[]) {
    this._collection = collection;
  }

  public update(item: Prestation, state: States) {
    item.state = state;
  }
}
