import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public uname:any;
  public apiUrl = 'http://localhost:3000/employees';
  public userUrl = 'http://localhost:3000/users';
  public leaveUrl = 'http://localhost:3000/leavedetails'
  constructor(private http:HttpClient) { }

  getUsers(){
     return this.http.get('http://localhost:3000/users')
  }

  getUserById(id:number){
    const url = `${this.userUrl}/${id}`;
    return this.http.get(url);
    
  }

  getEmployees(){
    return this.http.get('http://localhost:3000/employees')
  }


  getEmployeeById(id:number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);   
  }

  getLeaveById(id:number){
    const url = `${this.leaveUrl}/${id}`;
    return this.http.get(url);   
  }

  addEmployee(empData:any){
    return this.http.post('http://localhost:3000/employees/',empData)
  }

  updateEmployee(id:any,empData:any){
    return this.http.patch(`http://localhost:3000/employees/`+id,empData)
  }

  deleteEmployee(id:any){
    const baseURL = "http://localhost:3000/employees/"+id
    return this.http.delete(baseURL)
  }

}
