import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditEmpComponent } from '../edit-emp/edit-emp.component';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-empbyid',
  templateUrl: './empbyid.component.html',
  styleUrls: ['./empbyid.component.scss']
})
export class EmpbyidComponent implements OnInit {
  id:any;
  empData:any;
  

  constructor(private ds:DataServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((data)=>{
      console.log(data);
      this.id = data['id']
      
    })
    this.ds.getEmployeeById(this.id).subscribe((item:any)=>{
      this.empData = item
      console.log(this.empData);
    })
   
  }
  
  }



