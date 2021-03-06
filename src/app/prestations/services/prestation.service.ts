import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { States } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private _collection$: Observable<Prestation[]>;
  public presta$: BehaviorSubject<Prestation> = new BehaviorSubject(null);

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
      map(data => {
        if (data.length) {
          this.presta$.next(new Prestation(data[0]));
          return data.map(doc => new Prestation(doc));
        }
        this.presta$.next(null);
        return null;
      })
    );

    // this.collection$ = this.http.get(`${URL_API}/prestation`).pipe(map(data => data.map(doc => new Prestation(doc))));
  }

  public get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  public set collection$(collection: Observable<Prestation[]>) {
    this._collection$ = collection;
  }

  // add presta
  public add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection
      .doc(id)
      .set(prestation)
      .catch(e => {
        console.log(e);
      });
    // return this.http.post('urlapi/addprestation', item);
  }

  public update(item: Prestation, state?: States): Promise<any> {
    const presta = { ...item };
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection
      .doc(item.id)
      .update(presta)
      .catch(e => {
        console.log(e);
      });
    // return this.http.patch('urlapi/prestationupdate/'+item.id, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection
      .doc(item.id)
      .delete()
      .catch(e => {
        console.log(e);
      });
    // return this.http.delete(`urlapi/prestations/delete/${item.id}`);
  }
}
