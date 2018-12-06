import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-form-reactive-client',
  templateUrl: './form-reactive-client.component.html',
  styleUrls: ['./form-reactive-client.component.scss']
})
export class FormReactiveClientComponent implements OnInit {
  public form: FormGroup;
  public states = Object.values(StateClient);
  public init = new Client();
  @Output() nItem: EventEmitter<Client> = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }
  createForm(): void {
    this.form = this.fb.group({
      nom: [
        this.init.nom,
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      mail: [this.init.mail, Validators.required],
      numero: [this.init.numero],
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
