import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgMicroInteractModule} from '../../projects/ng-micro-interact/src/lib/ng-micro-interact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMicroInteractModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
