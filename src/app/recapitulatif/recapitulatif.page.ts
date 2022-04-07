import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';
@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.page.html',
  styleUrls: ['./recapitulatif.page.scss'],
})
export class RecapitulatifPage implements OnInit {
  gettingData: any;
  maDate: any = new Date();

  constructor(private route: ActivatedRoute, private router: Router,private location : Location) { }

  ngOnInit() {
    this.gettingData = this.route.snapshot.params;
  }

  backPage(){
    this.location.back()
  }
}
