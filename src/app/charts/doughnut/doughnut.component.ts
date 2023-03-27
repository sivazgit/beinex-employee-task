import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { Chart }  from 'chart.js';
@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {
  

  constructor(private ds:DataServiceService) { }

  ngOnInit(): void {
    this.ds.getUsers().subscribe((data: any) => {
      const activeCount = data.filter((e:any) => e.status === 'online').length;
      const inactiveCount = data.filter((e:any) => e.status === 'offline').length;
      console.log(activeCount);
      
      // Use activeCount and inactiveCount to create the chart

      const doughnutChart = new Chart('doughnutChart', {
        type: 'doughnut',
        data: {
          labels: ['Active', 'Inactive'],
          datasets: [{
            label: 'status of Employees',
            data: [activeCount, inactiveCount],
            backgroundColor: ['green', '#517E9E']
          }]
        }
      });
    });
    
}
}
