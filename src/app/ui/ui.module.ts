import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './containers/ui/ui.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [UiComponent, HeaderComponent, FooterComponent, NavComponent],
  exports: [UiComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class UiModule { }
