import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagesPrestationsComponent } from './pages/pages-prestations/pages-prestations.component';
import { DetailPrestationComponent } from './components/detail-prestation/detail-prestation.component';
import { CommentairesPrestationComponent } from './components/commentaires-prestation/commentaires-prestation.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagesPrestationsComponent,
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', component: DetailPrestationComponent },
      { path: 'commentaires', component: CommentairesPrestationComponent }
    ],
  },
  { path: 'add', component: PageAddPrestationComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class PrestationsRoutingModule {}
