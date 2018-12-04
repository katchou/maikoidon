import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesClientsComponent } from './pages/pages-clients/pages-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';

@NgModule({
  declarations: [PagesClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
