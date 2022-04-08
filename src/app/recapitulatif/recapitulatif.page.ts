import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';
import { authen, db } from 'src/environments/environment';
import { signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { UserSignin } from '../Models/User';
@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.page.html',
  styleUrls: ['./recapitulatif.page.scss'],
})
export class RecapitulatifPage implements OnInit {
  gettingData: any;
  maDate: any = new Date();
  user = new UserSignin();
  constructor(private route: ActivatedRoute, private router: Router,private location : Location) { }

  ngOnInit() {
    this.gettingData = this.route.snapshot.params;
  }

  logOut():void{
    signOut(authen).then(() => {
     this.router.navigateByUrl('/home');
    }).then((usr) => {
        setDoc(doc(db, 'users'), {
          Course:""
        })
        .catch(() => console.log('Failed to create doc'));
      }).catch((error) => {
      // An error happened.
    });
  }

  backPage(){
    this.location.back()
  }
}
