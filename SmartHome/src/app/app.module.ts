import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeaderComponent } from './components/header/header.component';
import { ThermostatPageComponent } from './components/thermostat-page/thermostat-page.component';
import { LightingControlPageComponent } from './components/lighting-control-page/lighting-control-page.component';
import { GroceriesDatabasePageComponent } from './components/groceries-database-page/groceries-database-page.component';
import { ScreenTimeTvPageComponent } from './components/screen-time-tv-page/screen-time-tv-page.component';
import { MedicineTimerPageComponent } from './components/medicine-timer-page/medicine-timer-page.component';
import { SecurityControlPageComponent } from './components/security-control-page/security-control-page.component';
import { VacuumCleanerPageComponent } from './components/vacuum-cleaner-page/vacuum-cleaner-page.component';
import { MusicPageComponent } from './components/music-page/music-page.component';
import { FlowerWateringPageComponent } from './components/flower-watering-page/flower-watering-page.component';
import { MatSnackBar, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    HeaderComponent,
    ThermostatPageComponent,
    LightingControlPageComponent,
    GroceriesDatabasePageComponent,
    ScreenTimeTvPageComponent,
    MedicineTimerPageComponent,
    SecurityControlPageComponent,
    VacuumCleanerPageComponent,
    MusicPageComponent,
    FlowerWateringPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 1000}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
