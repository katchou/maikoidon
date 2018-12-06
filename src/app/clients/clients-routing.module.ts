import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';
import { CommentairesClientComponent } from './components/commentaires-client/commentaires-client.component';
import { DetailsClientComponent } from './components/details-client/details-client.component';
import { PagesClientsComponent } from './pages/pages-clients/pages-clients.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagesClientsComponent,
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', component: DetailsClientComponent },
      { path: 'commentaires', component: CommentairesClientComponent },
    ]
  },
  { path: 'add', component: AddClientComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {}
