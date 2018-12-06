import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MenuItemI } from 'src/app/shared/interfaces/menu-item-i';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  public collection$: Observable<Prestation[]>;
  public headers: string[];
  public menuItems: MenuItemI[];
  // private sub: Subscription;

  constructor(private ps: PrestationService) {}

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
    this.menuItems = [
      { route: 'details', label: 'Détails' },
      { route: 'commentaires', label: 'Commentaire' }
    ];
  }
  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
