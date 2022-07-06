// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AComModule { }
import { NgModule } from '@angular/core';
import { AComRoutingModule } from './a-com-routing.module';
import { AComComponent } from './a-com.component';
@NgModule({
  imports: [AComRoutingModule],
  declarations: [AComComponent],
})
export class AComModule {}
