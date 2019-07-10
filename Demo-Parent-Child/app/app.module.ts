﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AddEmployeeComponent } from './app.addemployee'
import {FormsModule}   from '@angular/forms';
import { showEmployee } from './app.showemployee';

@NgModule({
    imports: [
        BrowserModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent,showEmployee
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }