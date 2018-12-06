import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { States } from 'src/app/shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() public prestation: Prestation;
  public states = Object.values(States);
  public faTrashAlt = faTrashAlt;

  constructor(
    private ps: PrestationService
  ) { }

  ngOnInit() {
  }

  changeState(event) {
    const state = event.target.value;
    this.ps.update(this.prestation, state).then((data) => {
      // gérer le retour API
      this.prestation.state = state;
    });
  }

  delete(item: Prestation): void {
    this.ps.delete(item).then((data) => {
      // gérer retour API
    });
  }
}
