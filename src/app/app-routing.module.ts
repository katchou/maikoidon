import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './login/pages/page-login/page-login.component';

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'prestations',
    loadChildren: './prestations/prestations.module#PrestationsModule'
  },
  {
    path: 'clients',
    loadChildren: './clients/clients.module#ClientsModule'
  },
  {
    path: '**',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'
  }
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true,
      // preloadingStrategy: PreloadAllModules
    })
  ]
})
export class AppRoutingModule {
  constructor(router: Router) {
    const replacer = (key, value) =>
      typeof value === 'function' ? value.name : value;
    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
