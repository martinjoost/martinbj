import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsRoutingModule } from './skills-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SkillsComponent } from './skills/skills.component';
import { BottomSheetOverviewExampleSheetComponent } from './bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';

@NgModule({
  imports: [
    CommonModule,
    SkillsRoutingModule,
    SharedModule
  ],
  declarations: [
    SkillsComponent,
    BottomSheetOverviewExampleSheetComponent
  ],
  entryComponents: [
    BottomSheetOverviewExampleSheetComponent
  ]
})
export class SkillsModule { }
