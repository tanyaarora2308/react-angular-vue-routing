// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { RouterModule, Routes } from '@angular/router';
import { BComComponent } from './b-com/b-com.component';
const routes: Routes = [
  {
    path: 'b-com',
    component: BComComponent,
  },
  {
    path: 'a-com',
    loadChildren: () =>
      import('./a-com/a-com.module').then((m) => m.AComModule),
  },
];
export const AppRoutingModule = RouterModule.forRoot(routes, {
  relativeLinkResolution: 'legacy',
});
