import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private itemsCollection: AngularFirestoreCollection<Client>;
  private _collection$: Observable<Client[]>;

  constructor(private afs: AngularFirestore) {
    // this.collection = fakeClient;
    this.itemsCollection = afs.collection('clients');
    this.collection$ = this.itemsCollection
      .valueChanges()
      .pipe(map(data => data.map(doc => new Client(doc))));
  }

  public get collection$(): Observable<Client[]> {
    return this._collection$;
  }

  public set collection$(collection: Observable<Client[]>) {
    this._collection$ = collection;
  }

  public add(item: Client): Promise<any> {
    const id = this.afs.createId();
    const client = {id, ...item};
    return this.itemsCollection
      .doc(id)
      .set(client)
      .catch(e => console.log(e));
  }

  public update(item: Client, state?: StateClient): Promise<any> {
    const client = { ...item };
    if (state) {
      client.state = state;
    }
    return this.itemsCollection
      .doc(item.id)
      .update(client)
      .catch(e => console.log(e));
  }

  public delete(item: Client): Promise<any> {
    return this.itemsCollection
      .doc(item.id)
      .delete()
      .catch(e => console.log(e));
  }
}
