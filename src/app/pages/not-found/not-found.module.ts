import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './not-found.routing.module';

import { WelcomeComponent } from './not-found.component';


@NgModule({
  imports: [WelcomeRoutingModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
