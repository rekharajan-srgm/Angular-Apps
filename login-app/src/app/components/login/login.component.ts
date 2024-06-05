import { Component } from '@angular/core';
import {Router} from '@angular/router';
import{User} from '../../../app/user'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){

  }
  uname:string="";
  psword:string="";
  
  showRegister(){
    this.router.navigate(['/register']);
  }

  loginDashboard(){ 
    localStorage.setItem('uname',this.uname);
    localStorage.setItem("psword",this.psword);
    const value1=localStorage.getItem("uname");
    const value2=localStorage.getItem("un");
    const pswd1=localStorage.getItem("psword");
    const pswd2=localStorage.getItem("pswd");
    if(value1===value2 && pswd1===pswd2){
      this.router.navigate(['/register']);
    }
  }
 
}
