import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';//ng generate component hello-world did not add the import to it here, nor the declaration to it below

@NgModule({
  declarations: [
    AppComponent, HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
