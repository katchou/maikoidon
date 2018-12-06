import { Component, Input, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from '../../services/client.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  @Input() public client: Client;
  public states = Object.values(StateClient);
  public faTrashAlt = faTrashAlt;

  constructor(
    private cs: ClientService
  ) { }

  ngOnInit() {
  }

  changeState(event) {
    const state = event.target.value;
    this.cs.update(this.client, state);
  }

  delete(item: Client): void {
    this.cs.delete(item).then((data) => {
      // gérer retour API
    });
  }
}
