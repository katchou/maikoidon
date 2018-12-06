import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-commentaires-prestation',
  templateUrl: './commentaires-prestation.component.html',
  styleUrls: ['./commentaires-prestation.component.scss']
})
export class CommentairesPrestationComponent implements OnInit {

  public presta$: Subject<Prestation>;
  constructor(private ps: PrestationService) { }

  ngOnInit() {
    this.presta$ = this.ps.presta$;
  }

}
