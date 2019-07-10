import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    empName:string="Capgemini.....";
    empName1:string="Mayur";
    message:string;
    getDataFromChild(msg){
        this.message=msg;
    }
 }