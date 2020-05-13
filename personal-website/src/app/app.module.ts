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
import { NgApexchartsModule } from 'ng-apexcharts';
import { PythonmysqlComponent } from './components/learning/pythonmysql/pythonmysql.component';
import { MatCardModule } from '@angular/material/card';
import { IELTSComponent } from './components/courses/ielts/ielts.component';
import { FlexModule } from '@angular/flex-layout';
import { ComputingtheoryComponent } from './components/courses/computingtheory/computingtheory.component';
import { TensorflowComponent } from './components/learning/tensorflow/tensorflow.component';
import { OsComponent } from './components/courses/os/os.component';
import { AlgorithmComponent } from './components/courses/algorithm/algorithm.component';
import { GraphComponent } from './components/courses/graph/graph.component';
import { AIComponent } from './components/courses/ai/ai.component';
import { HttpClientModule } from '@angular/common/http';
import { PopMessageComponent, ToDoListComponent} from './components/tools/to-do-list/to-do-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent,
    children: [
      { path: 'IELTS', component: IELTSComponent },
      { path: 'ComputingTheory', component: ComputingtheoryComponent },
      { path: 'OS', component: OsComponent },
      { path: 'Algo', component: AlgorithmComponent },
      { path: 'graph', component: GraphComponent },
      { path: 'AI', component: AIComponent }
    ]
  },
  { path: 'learning', component: LearningComponent },
  { path: 'tools', component: ToolsComponent,
    children: [
      { path: 'todo', component: ToDoListComponent }
    ]
  }
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
    BarChartComponent,
    PythonmysqlComponent,
    IELTSComponent,
    ComputingtheoryComponent,
    TensorflowComponent,
    OsComponent,
    AlgorithmComponent,
    GraphComponent,
    AIComponent,
    ToDoListComponent,
    PopMessageComponent
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
    NgApexchartsModule,
    MatCardModule,
    FlexModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
