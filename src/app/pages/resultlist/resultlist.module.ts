import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResultlistPage } from './resultlist.page';

const routes: Routes = [
  {
    path: '',
    component: ResultlistPage
  }, {
    path: ':id',
    loadChildren: '../freighterdetails/freighterdetails.module#FreighterdetailsPageModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResultlistPage]
})
export class ResultlistPageModule {}
