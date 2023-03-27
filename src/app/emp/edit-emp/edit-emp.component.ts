import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.scss']
})
export class EditEmpComponent implements OnInit {
  
editEmployeeForm!:FormGroup;
empId:any;
employeeData:any;
eName:any;

  constructor(private fb:FormBuilder,private ds:DataServiceService,private route:ActivatedRoute,private router:Router) { 
   this.route.params.subscribe((data)=>{
    this.empId = data['id']
    console.log(this.empId);
    
   })

   
  }

  ngOnInit(): void {
    this.ds.getEmployeeById(this.empId).subscribe((data:any)=>{
      this.employeeData = data
      console.log(this.employeeData);
      this.eName = this.employeeData.name
      console.log(this.eName);
    
      
    })

    this.editEmployeeForm = this.fb.group({
      id:[this.empId],
      name: [this.eName],
      age: [""],
      address: [""],
      dob: [""],
      image: [],
      bloodgroup: [""],
      gender: [""],
      email: [""],
      contact: [""],
      department: [""],
      designation: [""],
      experience: [""],
  
    })

  }

  updEmp() {
    let newEmployee = {

      id:this.editEmployeeForm.value.id,
      name: this.editEmployeeForm.value.name,
      age: this.editEmployeeForm.value.age,
      address: this.editEmployeeForm.value.address,
      dob: this.editEmployeeForm.value.dob,
      image: this.editEmployeeForm.value.image,
      bloodgroup: this.editEmployeeForm.value.bloodgroup,
      gender: this.editEmployeeForm.value.gender,
      email: this.editEmployeeForm.value.email,
      contact: this.editEmployeeForm.value.contact,
      department: this.editEmployeeForm.value.department,
      designation: this.editEmployeeForm.value.designation,
      experience: this.editEmployeeForm.value.experience,
      
    }

    // console.log(newEmployee);
    this.ds.updateEmployee(this.empId,newEmployee).subscribe((data:any)=>{
      alert("Employee details updated successfully")
      this.router.navigateByUrl('empview')
    })
    
    

}
}