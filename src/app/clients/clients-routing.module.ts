import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PagesClientsComponent } from './pages/pages-clients/pages-clients.component';

const appRoutes: Routes = [
  { path: '', component: PagesClientsComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class ClientsRoutingModule {}
