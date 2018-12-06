import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesClientsComponent } from './pages/pages-clients/pages-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ClientComponent } from './components/client/client.component';
import { SharedModule } from '../shared/shared.module';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { FormReactiveClientComponent } from './components/form-reactive-client/form-reactive-client.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PagesClientsComponent,
    ListClientsComponent,
    ClientComponent,
    PageAddClientComponent,
    AddClientComponent,
    FormReactiveClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule {}
