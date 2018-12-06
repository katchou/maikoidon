import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(
    private cs: ClientService,
    private router: Router,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  add(item: Client): void {
    this.cs.add(item);
    this.router.navigate(['../', {relativeTo: this.ar}]);
  }

}
