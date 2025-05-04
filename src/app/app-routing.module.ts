import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompCommunicationComponent } from './comp-communication/comp-communication.component';
import { HomeCooComponent } from './home-coo/home-coo.component';
import { DirecComponent } from './direc/direc.component';
import { Child2CompComponent } from './comp-communication/child2-comp/child2-comp.component';

const routes: Routes = [
  {path:'', component:HomeCooComponent},
  {path:'communication', component:CompCommunicationComponent},
  {path:'communication', children: [{
    path:'unrelatedCompCommu',component:Child2CompComponent
  }]},
  {path:'direc', component: DirecComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
