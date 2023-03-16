import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

uname:string=''
uemail:string=''
message:any=''
constructor(private fs:FireService)
{}
usrSend()
{
  if(this.uname==='')
  {
    alert("pease enter your username")
    return
  }
  else if(this.uemail==='')
  {
    alert("please enter your email")
    return
  }
  else if(this.message==='')
  {
    alert("please enter your message")
    return
  }
  const Data={
    username:this.uname,
    useremail:this.uemail,
    message:this.message
  }
  console.log("hello...")
  
  this.fs.addContact(Data)
  
}
// conValidation()
// {
//   if(this.uname==='')
//   {
//     alert("pease enter your username")
//     return
//   }
//   else if(this.uemail==='')
//   {
//     alert("please enter your email")
//     return
//   }
// }
}
  