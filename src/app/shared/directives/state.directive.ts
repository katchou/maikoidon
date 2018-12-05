import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { States } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() state: States;
  @HostBinding('class') nomClass: string;

  constructor() {}

  ngOnChanges() {
    this.nomClass = this.formatClass(this.state);
  }

  formatClass(state: States): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }
}
