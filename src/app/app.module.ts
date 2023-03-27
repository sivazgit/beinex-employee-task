import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HrHomeComponent } from './dashboard/hr-home/hr-home.component';
import { EmpHomeComponent } from './dashboard/emp-home/emp-home.component';
import { DoughnutComponent } from './charts/doughnut/doughnut.component';
import { BarComponent } from './charts/bar/bar.component';
import { GaugeComponent } from './charts/gauge/gauge.component';
import { NgChartsModule } from 'ng2-charts';
import { EmpListComponent } from './tables/emp-list/emp-list.component';
import { CreateEmpComponent } from './emp/create-emp/create-emp.component';
import { EmpViewComponent } from './emp/emp-view/emp-view.component';
import { EditEmpComponent } from './emp/edit-emp/edit-emp.component';
import { DeleteEmpComponent } from './emp/delete-emp/delete-emp.component';
import { EmpbyidComponent } from './emp/empbyid/empbyid.component';
import { HrInfoComponent } from './pages/hr-info/hr-info.component';
import { EmphrdetailsComponent } from './emp-pages/emphrdetails/emphrdetails.component';
import { GchartComponent } from './charts/gchart/gchart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HrHomeComponent,
    EmpHomeComponent,
    DoughnutComponent,
    BarComponent,
    GaugeComponent,
    EmpListComponent,
    CreateEmpComponent,
    EmpViewComponent,
    EditEmpComponent,
    DeleteEmpComponent,
    EmpbyidComponent,
    HrInfoComponent,
    EmphrdetailsComponent,
    GchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
