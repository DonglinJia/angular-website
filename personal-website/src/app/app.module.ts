import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { ToolsComponent } from './components/tools/tools.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { LearningComponent } from './components/learning/learning.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { PopupComponent } from './components/home/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HorchartComponent } from './components/home/horchart/horchart.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/home/bar-chart/bar-chart.component';
import {NgApexchartsModule} from 'ng-apexcharts';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'tools', component: ToolsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    CoursesComponent,
    HomeComponent,
    LearningComponent,
    PopupComponent,
    HorchartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    ChartsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
