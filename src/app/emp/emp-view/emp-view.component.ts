import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.scss']
})
export class EmpViewComponent implements OnInit {

  employeeData:any;
  empId:any
  constructor(private ds:DataServiceService,private router:Router) { }

  ngOnInit(): void {
    this.ds.getEmployees().subscribe((data:any)=>{
      this.employeeData = data;
    // this.empId = data.map((e:any)=> e.id);
    // console.log(this.empId);
    
    })
  }

  

 

}
