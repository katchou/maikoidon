import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PrestationComponent } from './components/prestation/prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PagesPrestationsComponent } from './pages/pages-prestations/pages-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { AddPrestationComponent } from './components/add-prestation/add-prestation.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormReactivePrestationComponent } from './components/form-reactive-prestation/form-reactive-prestation.component';
import { DetailPrestationComponent } from './components/detail-prestation/detail-prestation.component';
import { CommentairesPrestationComponent } from './components/commentaires-prestation/commentaires-prestation.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PagesPrestationsComponent,
    ListPrestationsComponent,
    PrestationComponent,
    PageAddPrestationComponent,
    AddPrestationComponent,
    FormPrestationComponent,
    FormReactivePrestationComponent,
    DetailPrestationComponent,
    CommentairesPrestationComponent,
    NgbAccordionModule
  ],
  imports: [CommonModule, PrestationsRoutingModule, SharedModule, FormsModule, ReactiveFormsModule]
})
export class PrestationsModule {}
