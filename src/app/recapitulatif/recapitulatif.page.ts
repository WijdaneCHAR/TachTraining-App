import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';
import { authen, db } from 'src/environments/environment';
import { signOut } from 'firebase/auth';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { UserSignin } from '../Models/User';
@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.page.html',
  styleUrls: ['./recapitulatif.page.scss'],
})
export class RecapitulatifPage implements OnInit {
  gettingData: any;
  maDate: any = new Date();
  userData: any;
  constructor(private route: ActivatedRoute, private router: Router,private location : Location) { }

  async ngOnInit() {
    this.gettingData = this.route.snapshot.params;
    const querySnapshot = await getDocs(collection(db, this.gettingData.userId));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    this.userData = data;
  }

  logOut():void{
    signOut(authen).then(() => {
    this.router.navigateByUrl('/home');
    }).catch((error) => {
      // An error happened.
    });
  }

  backPage(){
    this.location.back()
  }
}
