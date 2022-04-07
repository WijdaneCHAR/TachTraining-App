import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public selectedFormation: any;
  constructor(private routeActivate: ActivatedRoute,private router: Router,private location : Location) { }

  ngOnInit() {
    this.selectedFormation = this.routeActivate.snapshot.params;
  }
  authenticationPage(): void {
    this.router.navigate(['/login',this.selectedFormation]);
  }
  
  backPage(){
    this.location.back()
  }
}
