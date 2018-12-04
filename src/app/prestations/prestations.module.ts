import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesPrestationsComponent } from './pages/pages-prestations/pages-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';

@NgModule({
  declarations: [PagesPrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule
  ]
})
export class PrestationsModule { }
