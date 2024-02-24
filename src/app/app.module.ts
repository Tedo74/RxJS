import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicObservableComponent } from './basic-observable/basic-observable.component';
import { HotObservableComponent } from './hot-observable/hot-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicObservableComponent,
    HotObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
