import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesPrestationsComponent } from './pages/pages-prestations/pages-prestations.component';

const appRoutes: Routes = [
  { path: '', component: PagesPrestationsComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ]
})
export class PrestationsRoutingModule {}
