import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-hr-info',
  templateUrl: './hr-info.component.html',
  styleUrls: ['./hr-info.component.scss']
})
export class HrInfoComponent implements OnInit {

  hrmessage:any
  modalForm = this.fb.group({
  message: []
    
  })
  constructor(private fb:FormBuilder,private ds:DataServiceService) { }

  ngOnInit(): void {
  

  }
  
  modalSave() {
    let newMessage = {
      message: this.modalForm.value.message     
    }
    // console.log(newMessage);
    this.hrmessage = newMessage;
    console.log(this.hrmessage);
    
    localStorage.setItem('hrMessage', JSON.stringify(newMessage));


}




}