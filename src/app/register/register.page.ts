/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { db } from 'src/environments/environment';
import { UserSignup } from './../Models/User';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authen } from './../../environments/environment';
import { doc, setDoc } from 'firebase/firestore';

import { Location } from '@angular/common';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user = new UserSignup();
  data: any;
  password: string;
  confirmPassword: string;

  constructor(private route: ActivatedRoute, private router: Router,private location : Location) { }

  ngOnInit() {
    this.data = this.route.snapshot.params;
  }

  signUp(): void {
    if (this.password === this.confirmPassword) {
      createUserWithEmailAndPassword(authen, this.user.email, this.password)
      .then((usr) => {
        setDoc(doc(db, 'users', usr.user.uid), {
          FullName: this.user.fullname,
          Email: this.user.email,
          Phone: this.user.phoneNumber
        }).then(() => {
          this.data = {...this.data, fullName: this.user.fullname};
          this.router.navigate(['/recapitulatif',this.data]);})
        .catch(() => console.log('Failed to create doc'));
      })
      .catch(() => console.log('Signup failed')
      );
    } else {
      alert('Password dont match confirm password');
    }

  }

  backPage(){
    this.location.back()
  }

}
