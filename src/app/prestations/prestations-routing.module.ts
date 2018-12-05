import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagesPrestationsComponent } from './pages/pages-prestations/pages-prestations.component';

const appRoutes: Routes = [
  { path: '', component: PagesPrestationsComponent },
  { path: 'add', component: PageAddPrestationComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class PrestationsRoutingModule {}
