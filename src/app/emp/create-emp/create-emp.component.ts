import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.scss']
})
export class CreateEmpComponent implements OnInit {

  addEmployee = this.fb.group({
    id: [],
    name: [""],
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


  constructor(private ds: DataServiceService, private fb: FormBuilder,private router:Router) {

  }

  ngOnInit(): void {
  }

  addEmp() {
    let newEmployee = {

      id: this.addEmployee.value.id,
      name: this.addEmployee.value.name,
      age: this.addEmployee.value.age,
      address: this.addEmployee.value.address,
      dob: this.addEmployee.value.dob,
      image: this.addEmployee.value.image,
      bloodgroup: this.addEmployee.value.bloodgroup,
      gender: this.addEmployee.value.gender,
      email: this.addEmployee.value.email,
      contact: this.addEmployee.value.contact,
      department: this.addEmployee.value.department,
      designation: this.addEmployee.value.designation,
      experience: this.addEmployee.value.experience,

    }

    this.ds.addEmployee(newEmployee).subscribe((data:any)=>{
      alert("Employee details added successfully!")
      this.router.navigateByUrl('empview')
    })

  }

}
