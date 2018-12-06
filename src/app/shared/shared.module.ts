import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddRowComponent } from './components/add-row/add-row.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { TemplatesModule } from '../templates/templates.module';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';

@NgModule({
  declarations: [TotalPipe, TableauComponent, StateDirective, AddRowComponent, SubMenuComponent],
  exports: [
    TotalPipe,
    TableauComponent,
    StateDirective,
    AddRowComponent,
    TemplatesModule,
    FontAwesomeModule,
    SubMenuComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    TemplatesModule,
    FontAwesomeModule
  ]
})
export class SharedModule {}
