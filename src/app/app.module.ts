import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {S1MicroInteractModule} from '../../projects/s1-micro-interact/src/lib/s1-micro-interact.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    S1MicroInteractModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
