import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Hal3PageRoutingModule } from './hal3-routing.module';

import { Hal3Page } from './hal3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Hal3PageRoutingModule
  ],
  declarations: [Hal3Page]
})
export class Hal3PageModule {}
