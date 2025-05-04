import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompCommunicationComponent } from './comp-communication/comp-communication.component';
import { ChildCompComponent } from './comp-communication/child-comp/child-comp.component';
import { HomeCooComponent } from './home-coo/home-coo.component';
import { DirecComponent } from './direc/direc.component';
import { CustomdrDirective } from './direc/customdr.directive';
import { Child2CompComponent } from './comp-communication/child2-comp/child2-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    CompCommunicationComponent,
    ChildCompComponent,
    HomeCooComponent,
    DirecComponent,
    CustomdrDirective,
    Child2CompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
