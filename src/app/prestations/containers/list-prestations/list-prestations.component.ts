import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {

  public collection$: Observable<Prestation[]>;
  public headers: string[];
  private sub: Subscription;

  constructor(
    private ps: PrestationService
  ) { }

  ngOnInit() {
    this.collection$ = this.ps.collection$;
      this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'TJM HT',
      'Total HT',
      'Total TTC',
      'State',
      'Supprimer'
    ];
  }
  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
