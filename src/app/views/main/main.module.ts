import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    FontAwesomeModule
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
