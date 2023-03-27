import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-hr-home',
  templateUrl: './hr-home.component.html',
  styleUrls: ['./hr-home.component.scss']
})
export class HrHomeComponent implements OnInit {

  uname = this.ds.uname;
  constructor(private ds:DataServiceService) { }

  ngOnInit(): void {
  }

}
