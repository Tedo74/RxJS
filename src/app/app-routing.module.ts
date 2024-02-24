import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicObservableComponent} from "./basic-observable/basic-observable.component";
import {HotObservableComponent} from "./hot-observable/hot-observable.component";

const routes: Routes = [
  {
    path: "basic",
    component: BasicObservableComponent
  },
  {
    path: "hot",
    component: HotObservableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
