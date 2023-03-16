import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, collection, doc, addDoc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private auth: Auth, private fires: Firestore, private router: Router) { }

  //registration
  registration(userdetails: any) {
    createUserWithEmailAndPassword(this.auth, userdetails.email, userdetails.password).then(res => {
      const uid = res.user.uid;
      const usercollection = doc(this.fires, 'users', uid);
      let user = {
        "name": userdetails.username,
        "email": userdetails.email
      };
      setDoc(usercollection, user).then((res) => {
        console.log(res);
        alert('signed up successfully');
        this.router.navigate(['/home']);
      }).catch((err) => {
        console.log(err);
      });
    });
  }

  loginfn(userDetails: any) {
    signInWithEmailAndPassword(this.auth, userDetails.email, userDetails.password).then(res => {
      alert('signed in successfully');
      this.router.navigate(['/home']);
    }).catch((err) => {
      alert(err);
    });
  }

  signout1() {
    signOut(this.auth).then(res => {
      alert('signed out successfully');
      this.router.navigate(['/login']);
    }).catch((err) => {
      alert(err);
    });
  }

addContact(Data:any)
{
  const contactCollection=collection(this.fires,'contact')
  addDoc(contactCollection,Data).then(()=>{
    alert("contact added successfully");
  }).catch((err)=>{
    alert("error adding Contact")
  })
}



addData(f:any) {
  //console.log(f.value);
  const userCollection = collection(this.fires, 'adoption')
  addDoc(userCollection, f.value).then(() => { 
    console.log("Data added successfully")
  }).catch((err) => {
    console.log(err)
  })
  console.log(f);
  
}

}
