import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaugeModule } from 'angular-gauge';
import { GaugeComponent } from './charts/gauge/gauge.component';
import { GchartComponent } from './charts/gchart/gchart.component';
import { EmpHomeComponent } from './dashboard/emp-home/emp-home.component';
import { HrHomeComponent } from './dashboard/hr-home/hr-home.component';
import { CreateEmpComponent } from './emp/create-emp/create-emp.component';
import { DeleteEmpComponent } from './emp/delete-emp/delete-emp.component';
import { EditEmpComponent } from './emp/edit-emp/edit-emp.component';
import { EmpViewComponent } from './emp/emp-view/emp-view.component';
import { EmpbyidComponent } from './emp/empbyid/empbyid.component';
import { LoginComponent } from './pages/login/login.component';
import { EmpListComponent } from './tables/emp-list/emp-list.component';

const routes: Routes = [
 {
  path:'',component:LoginComponent
 },
 {
  path:'hrhome',component:HrHomeComponent
 },
 {
  path:'gview',component:GaugeComponent
 },
 {
  path:'gchart',component:GchartComponent
 },
 {
  path:'emphome/:id',component:EmpHomeComponent
 },
 {
  path:'emplist',component:EmpListComponent
 },
 {
  path:'addemp',component:CreateEmpComponent
 },
 {
  path:'empview',component:EmpViewComponent
 },
 {
  path:'empby/:id',component:EmpbyidComponent
 },
 {
  path:'editemp/:id',component:EditEmpComponent
 },
 {
  path:'deleteemp/:id',component:DeleteEmpComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
