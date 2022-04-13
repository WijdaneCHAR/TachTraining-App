/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { db } from 'src/environments/environment';
import { UserSignup } from './../Models/User';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { authen } from './../../environments/environment';
import { doc, setDoc } from 'firebase/firestore';


import { Location } from '@angular/common';
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
  Toast = Swal.mixin({
    toast: true,
    position: 'top-bottom',
    showConfirmButton: false,
    timer: 2000,
    width:"100%",
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
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
          Phone: this.user.phoneNumber,
          Course:this.data.name,
          Id:usr.user.uid,
        }).then(() => {
          setDoc(doc(db, usr.user.uid, usr.user.uid+this.data.name), {
            course : this.data.name,
            price : this.data.price,
            duration : this.data.duration
          }).catch(() => console.log('Failed to create doc'));
          this.data = {...this.data, fullName: this.user.fullname,userId : usr.user.uid };
          this.router.navigate(['/recapitulatif',this.data]);})
        .catch(() => console.log('Failed to create doc'));
      })
      .catch(() => { this.Toast.fire({
        icon: 'error',
        title: 'Signed up failed'
      })}
      );
    } else {
      this.Toast.fire({
        icon: 'error',
        title: 'Password do not match'
      });
    }

  }

  backPage(){
    this.location.back()
  }

}
