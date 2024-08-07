import { Component} from '@angular/core';
import {Router} from '@angular/router';
import{User} from '../../../app/user';
import {UserService} from '../../service/user.service';
import { response } from 'express';
import { HttpClient } from '@angular/common/http';
// import {BackendApiService} from ''
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router:Router,public apiService:UserService,private http: HttpClient){
    
  }
  fn:string="";
  ln:string="";
  un:string="";
  pswd:string="";

  model=new User(this.fn,this.ln,this.un,this.pswd);
  backToLogin()
  {
    this.router.navigate(['/login']);
  }
  regForm(){
    console.log("register is done!");
    this.model=new User(this.fn,this.ln,this.un,this.pswd);
    console.log(this.model);
    localStorage.setItem('fn',this.fn);
    localStorage.setItem("ln",this.ln);
    localStorage.setItem('un',this.un);
    localStorage.setItem("pswd",this.pswd);
    console.log(localStorage.getItem('fn'));
    console.log(localStorage.getItem('ln'));
    console.log(localStorage.getItem('un'));
    console.log(localStorage.getItem('pswd'));
    this.apiService.regUser(this.model);
    this.router.navigate(['/login']);
  }

}
