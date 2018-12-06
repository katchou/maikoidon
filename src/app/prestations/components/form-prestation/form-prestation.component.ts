import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { States } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  public states = Object.values(States);
  public init = new Prestation();
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.nItem.emit(this.init);
  }
}
