import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoggedinPageRoutingModule } from './loggedin-routing.module';

import { LoggedinPage } from './loggedin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoggedinPageRoutingModule
  ],
  declarations: [LoggedinPage]
})
export class LoggedinPageModule {}
