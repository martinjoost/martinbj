import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  declarations: [AboutmeComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  entryComponents: []
})
export class AboutModule { }
