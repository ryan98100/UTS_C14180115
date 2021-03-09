import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Hal3Page } from './hal3.page';

const routes: Routes = [
  {
    path: '',
    component: Hal3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Hal3PageRoutingModule {}
