import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Signup } from '../model/signup';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string="";
  password: string="";
  data: any;
  
 
 
  constructor(private http: HttpClient, private route: Router )
  {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
register()
  {
  
    let bodyData = {
      "email" : this.email,
      "password" : this.password
      
    };
    this.http.post("http://localhost:8084/user/login",bodyData).subscribe((resultData: any)=>
    {
        this.data = resultData;
        if(this.data){
          console.log(resultData);
            alert("Successfully Login")
          this.route.navigate(['/cart']);
        }
        else {
          console.log(resultData);
           alert("Invalid Credentials")
          
        }
        

        this.email = '';
        this.password = '';
      
    });
  }
login()
  {
        this.register();
  }
}