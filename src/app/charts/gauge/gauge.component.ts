import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { Chart } from 'chart.js'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {

  constructor(private ds: DataServiceService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/workinghours').subscribe((res) => {
    });

    // const doughnutChart = new Chart('doughnutChart',{
    //   type: 'doughnut',
    //   data: {
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],
    //       backgroundColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
    //     }]
    //   },
    //   options: {
    //     rotation: 270, // start angle in degrees
    //     circumference: 180, // sweep angle in degrees
    //   }
    // })
  }
  }
