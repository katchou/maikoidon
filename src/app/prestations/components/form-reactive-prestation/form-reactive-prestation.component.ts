import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { States } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive-prestation',
  templateUrl: './form-reactive-prestation.component.html',
  styleUrls: ['./form-reactive-prestation.component.scss']
})
export class FormReactivePrestationComponent implements OnInit {
  public form: FormGroup;
  public states = Object.values(States);
  public init = new Prestation();
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      typePresta: [this.init.typePresta, Validators.required],
      client: [
        this.init.client,
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      nbJours: [this.init.nbJours],
      tjmHt: [this.init.tjmHt],
      tauxTva: [this.init.tauxTva],
      state: [this.init.state]
    });
  }
  isError(nfc: string): boolean {
    return this.form.get(nfc).invalid && this.form.get(nfc).touched;
  }

  onSubmit() {
    this.nItem.emit(this.form.value);
  }
}
