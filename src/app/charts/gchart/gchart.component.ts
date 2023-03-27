import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { Chart } from 'chart.js'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gchart',
  templateUrl: './gchart.component.html',
  styleUrls: ['./gchart.component.scss']
})
export class GchartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const doughnutChart = new Chart('doughnutChart',{
      type: 'doughnut',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
        }]
      },
      options: {
        rotation: 270, // start angle in degrees
        circumference: 180, // sweep angle in degrees
      }
    })
  }

  
}
