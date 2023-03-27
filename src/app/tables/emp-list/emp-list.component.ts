import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  public employees:any;
  
  constructor(private ds:DataServiceService,private router:Router) { }

  ngOnInit(): void {
    this.ds.getEmployees().subscribe((data:any)=>{
    this.employees = data;
    console.log(this.employees);
  
    
      
      
    })
  }
  addEmployee(){
      this.router.navigateByUrl('addemp')
  }

  viewEmployees(){
      this.router.navigateByUrl('empview')
  }
}
