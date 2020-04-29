import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule, MatToolbarModule, MatButtonModule,
  MatListModule, MatCardModule, MatProgressBarModule, MatInputModule,
  MatSnackBarModule, MatMenuModule, MatSidenavModule,
  MatProgressSpinnerModule, MatDatepickerModule, MatTableModule,
  MatAutocompleteModule, MatDialogModule, MatTabsModule, MatTooltipModule,
  MatSelectModule, MatPaginatorModule, MatChipsModule, MatButtonToggleModule,
  MatSlideToggleModule, MatBadgeModule, MatCheckboxModule, MatExpansionModule, MatSortModule, MatBottomSheetModule, MatGridListModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatButtonModule,
    MatListModule, MatCardModule, MatProgressBarModule, MatInputModule,
    MatSnackBarModule, MatProgressSpinnerModule, MatDatepickerModule,
    MatAutocompleteModule, MatTableModule, MatDialogModule, MatTabsModule,
    MatTooltipModule, MatSelectModule, MatPaginatorModule, MatChipsModule,
    MatButtonToggleModule, MatSlideToggleModule, MatBadgeModule, MatCheckboxModule,
    MatExpansionModule, DragDropModule, MatSortModule, MatBottomSheetModule, MatGridListModule
  ],
  exports: [
    CommonModule,
    MatSidenavModule, MatIconModule, MatToolbarModule, MatButtonModule,
    MatListModule, MatCardModule, MatProgressBarModule, MatInputModule,
    MatSnackBarModule, MatMenuModule, MatProgressSpinnerModule, MatDatepickerModule,
    MatAutocompleteModule, MatTableModule, MatDialogModule, MatTabsModule,
    MatTooltipModule, MatSelectModule, MatPaginatorModule, MatChipsModule,
    MatButtonToggleModule, MatSlideToggleModule, MatBadgeModule, MatCheckboxModule,
    MatExpansionModule, DragDropModule, MatSortModule, MatBottomSheetModule, MatGridListModule
  ],
  providers: [],
  declarations: []
})
export class CustomMaterialModule {
  static forRoot() {
    return {
      ngModule: CustomMaterialModule,
      providers: [
      ]
    };
  }
}
