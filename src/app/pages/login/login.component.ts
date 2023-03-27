import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 loginForm:any = FormGroup;
 public errorMsg:any;
 id:any;
 userData:any;
 
  constructor(private fb:FormBuilder,private ds:DataServiceService,private router:Router,private route:ActivatedRoute) {
    this.ds.getUsers().subscribe((response:any)=>{
      this.userData = response;
      console.log(this.userData);
      
      // this.id = response.map((e:any)=> e.id);
      // console.log(this.id);
      
    })
   }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern]],
      password: ['', [Validators.required, Validators.pattern]],

    })
  }

  login(){
    if(this.loginForm.valid){
      let username = this.loginForm.value.username;
      let password = this.loginForm.value.password;
      let userDetails = {
        username,
        password
    }
   this.ds.getUsers().subscribe((response:any)=>{
    let user = response.find((user: any) => {
      return user.username == username && user.password == password
    })
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(userDetails));
      // console.log(userDetails);
      
      if (user.role === 'hr') {
        user.status = 'online'
       this.ds.uname = username;
        this.router.navigateByUrl('hrhome');
        console.log(user);
        

      } else {
        this.id = user.id
        console.log(this.id);
        
        this.router.navigateByUrl(`emphome/${this.id}`);  
          }
    } else {
      this.errorMsg = "Incorrect username or password!"
    }
   })

  }

}
}