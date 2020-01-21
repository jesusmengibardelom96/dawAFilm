import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedinPage } from './loggedin.page';

const routes: Routes = [
  {
    path: '',
    component: LoggedinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggedinPageRoutingModule {}
