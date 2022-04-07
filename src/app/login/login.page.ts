import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { authen, db } from 'src/environments/environment';
import { UserSignin } from '../Models/User';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = new UserSignin();
  gettedFormation: any;
  constructor(private router: Router, private routeActivate: ActivatedRoute,private location : Location) { }

  ngOnInit() {
    this.gettedFormation = this.routeActivate.snapshot.params;
  }

  loginUser() :void {
    signInWithEmailAndPassword(authen,this.user.email,this.user.password)
    .then((usr)=>{
      getDoc(doc(db, "users", usr.user.uid))
      .then((doc) => {
        const userData = doc.data()
        this.gettedFormation = {...this.gettedFormation, fullName: userData.FullName}          
        this.router.navigate(['/recapitulatif',this.gettedFormation]);
      })
    }).catch(()=>{alert('Email or password is incorrect');});
  }


  registerUser(): void{
    this.router.navigate(['/register',this.gettedFormation]);
  }

  backPage(){
    this.location.back()
  }
}
