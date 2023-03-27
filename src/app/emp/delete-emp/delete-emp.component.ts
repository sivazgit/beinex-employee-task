import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.scss']
})
export class DeleteEmpComponent implements OnInit {
 id:any;

  constructor(private ds:DataServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.id = data['id']
    })
    this.ds.deleteEmployee(this.id).subscribe((item:any)=>{
      alert('Deleted employee Successfully!');
      this.router.navigateByUrl('empview')

    })
  }

}
