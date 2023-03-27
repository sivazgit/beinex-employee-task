import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-emp-home',
  templateUrl: './emp-home.component.html',
  styleUrls: ['./emp-home.component.scss']
})
export class EmpHomeComponent implements OnInit {
  uname = this.ds.uname;
  id:any;
  empData:any;
  empDetails:any;
  leaveData:any;
  // message = this.ds.hrMessage;
  constructor(private ds:DataServiceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      console.log(data);
      this.id = data['id']
      console.log(this.id);
      
      
    })
    this.ds.getUserById(this.id).subscribe((item:any)=>{
      this.empData = item
      console.log(this.empData);
    })

    this.ds.getEmployeeById(this.id).subscribe((data:any)=>{
      this.empDetails = data;
      
    })

    this.ds.getLeaveById(this.id).subscribe((item:any)=>{
      this.leaveData = item
      console.log(this.leaveData);
    })
  }

}
