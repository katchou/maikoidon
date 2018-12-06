import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PagesClientsComponent } from './pages/pages-clients/pages-clients.component';
import { AddClientComponent } from './components/add-client/add-client.component';

const appRoutes: Routes = [
  { path: '', component: PagesClientsComponent },
  { path: 'add', component: AddClientComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class ClientsRoutingModule {}
