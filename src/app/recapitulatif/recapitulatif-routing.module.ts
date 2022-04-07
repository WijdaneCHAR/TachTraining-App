import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecapitulatifPage } from './recapitulatif.page';

const routes: Routes = [
  {
    path: '',
    component: RecapitulatifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecapitulatifPageRoutingModule {}
