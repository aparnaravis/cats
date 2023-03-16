


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email1:any=''
  pass1:any=''
  username:any=''
  uemail:any=''
  upass=''

  
constructor(private fs:FireService) {
}
//signup
signup() {
  this.validation()
  let userDetails={
    username:this.username,
    email:this.uemail,
    password:this.upass
  }
this.fs.registration(userDetails)
}validation() {
  if (this.username === '') {
    alert("Please Enter Username");
    return false;
  }
  if (this.uemail === '') {
    alert("Please Enter Email");
    return false;
  }
  if (this.upass === '') {
    alert("Please Enter Password");
    return false;
  }
  return true;
}



login1()
  {
    if(this.email1==='')
    {
      alert('Please enter email')
    }
    else if(this.pass1==='')
    {
      alert('Please enter password')
    }
    let userDetails={
      email:this.email1,
      password:this.pass1,

  }
  this.fs.loginfn(userDetails)
  this.email1=''
  this.pass1=''
}


}
  