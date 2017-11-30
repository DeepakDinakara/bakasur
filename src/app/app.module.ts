import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table'
import { OverlayModule } from '@angular/cdk/overlay';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSortModule,
  MatPaginatorModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { MenuComponent, FeedbackComponent, MenuDetailsComponent } from './menu/menu.component';
import { RosterComponent } from './roster/roster.component';
import { UserDataComponent } from './user-data/user-data.component';
import { OverallDataComponent } from './overall-data/overall-data.component';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';

@NgModule({
  exports: [
    // CDk
    CdkTableModule,
    OverlayModule,

    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }

@NgModule({
  declarations: [
    AppComponent, MenuComponent, RosterComponent, UserDataComponent, OverallDataComponent, MyCalendarComponent, FeedbackComponent, MenuDetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
