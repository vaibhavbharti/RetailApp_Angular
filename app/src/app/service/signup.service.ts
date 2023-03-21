import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup } from '../model/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  baseUrl = "http://localhost:8085/api/users/"


  constructor(private httpClient: HttpClient) { }

  public addUser(signupObject: any) {
    return this.httpClient.post<Signup>(this.baseUrl, signupObject);
  }
    
}
