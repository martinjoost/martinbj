import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './experiences-routing.module';
import { ExperienciesComponent } from './experiences/experiencies.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule
  ],
  declarations: [ExperienciesComponent]
})
export class ExperiencesModule { }
