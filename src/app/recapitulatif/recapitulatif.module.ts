import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecapitulatifPageRoutingModule } from './recapitulatif-routing.module';

import { RecapitulatifPage } from './recapitulatif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecapitulatifPageRoutingModule
  ],
  declarations: [RecapitulatifPage]
})
export class RecapitulatifPageModule {}
