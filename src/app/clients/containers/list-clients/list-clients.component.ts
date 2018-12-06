import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from '../../services/client.service';
import { MenuItemI } from 'src/app/shared/interfaces/menu-item-i';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  public collection$: Observable<Client[]>;
  public headers: string[];
  public menuItems: MenuItemI[];

  constructor(private cs: ClientService) {}

  ngOnInit() {
    this.collection$ = this.cs.collection$;
    this.headers = ['Numero', 'Nom', 'Mail', 'State', 'Supprimer'];
    this.menuItems = [
      { route: 'details', label: 'Détails' },
      { route: 'commentaires', label: 'Commentaire' }
    ];
  }
}
