// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { APP_BASE_HREF } from '@angular/common';
// import { BComComponent } from './b-com/b-com.component';
// import { AComComponent } from './a-com/a-com.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     BComComponent,
//     AComComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [{ provide: APP_BASE_HREF, useValue: '/angular' }],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, AppRoutingModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/angular-app' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
