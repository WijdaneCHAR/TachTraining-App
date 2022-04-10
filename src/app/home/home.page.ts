import { Component } from '@angular/core';
import { db } from 'src/environments/environment';
import { collection, getDocs } from 'firebase/firestore';
import { Router } from '@angular/router';
import { Formation } from '../Models/Formation';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listeFormations: any;

  constructor(private router: Router ) {
    getDocs(collection(db, 'Formation'))
    .then((snapshot)=>{
      const listeFormationsArray = [];
      snapshot.docs.forEach((doc)=>{
      listeFormationsArray.push({...doc.data()});
    });
    this.listeFormations = listeFormationsArray;
    });
  }

  getDetails(formation: Formation): void {
    this.router.navigate(['/details', formation]);
  }

  logIn():void{
    this.router.navigateByUrl('/login');
  }
}



