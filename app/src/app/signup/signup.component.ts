import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscriber } from 'rxjs';
import { Signup } from '../model/signup';
import { SignupService } from '../service/signup.service';

export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string ="";
  contactNumber: string ="";
  email: string="";
  password: string="";
  // mobile: Number =0;
 
  constructor(private http: HttpClient)
  {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
register()
  {
  
    let bodyData = {
      "name" : this.name,
      "contactNumber" : this.contactNumber,
      "email" : this.email,
      "password" : this.password
      
    };
    this.http.post("http://localhost:8085/user/signup",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Registered Successfully")
        
        this.name = '';
        this.contactNumber = '';
        this.email = '';
        this.password = '';
      
    });
  }
save()
  {
        this.register();
  }
}




