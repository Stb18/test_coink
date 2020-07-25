import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPhonePageRoutingModule } from './register-phone-routing.module';

import { RegisterPhonePage } from './register-phone.page';
import { ComponentsModule } from 'src/app/components/components.module'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPhonePageRoutingModule,
    ComponentsModule
  ],
  declarations: [RegisterPhonePage]
})
export class RegisterPhonePageModule {}
