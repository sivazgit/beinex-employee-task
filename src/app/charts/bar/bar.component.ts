import { Component, OnInit } from '@angular/core';
import { Chart }  from 'chart.js';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  constructor(private ds:DataServiceService) { }

  ngOnInit(): void {

    this.ds.getUsers().subscribe((data:any)=>{
      const dates:any = data.map((e:any)=> e.leaves);
      console.log(dates);
      
      const flatLeaves = dates.flat();
      console.log(flatLeaves);
      
      const leaveCount = flatLeaves.reduce((leaveDate:any, count:any) => {
        if (leaveDate[count]) {
            leaveDate[count]++;
        } else {
            leaveDate[count] = 1;
        }
        return leaveDate;        
    },
    {});
    
     console.log(leaveCount);
     
    //  const ctx = document.getElementById('barChart');

     const leaveChart = new Chart('barChart', {
         type: 'bar',
         data: {
             labels: Object.keys(leaveCount),
             datasets: [{
                 label: 'Pastweek Total leaves taken by Employees',
                 data: Object.values(leaveCount),
                 backgroundColor: 'crimson',
                 borderColor: 'black',
                 borderWidth: 2
             }]
         },
         options: {
             scales: {
                 y: {
                     beginAtZero: true
                 }
             }
         }
     });
    
          
      
    })
    
   
  }
}


