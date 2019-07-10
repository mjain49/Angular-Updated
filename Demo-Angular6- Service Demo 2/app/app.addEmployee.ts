import { Component } from "@angular/core";
import { StylingIndex } from "@angular/core/src/render3/styling";


@Component({
    selector:'add-com',
    templateUrl:'addEmployee.html'
})

export class AddEmployeeComponent{
    
    empId:number;
    empName:String;
    empSalary:number;
    emp_list:any;
    status:boolean;

    addEmployee():any{
        this.status=!this.status;
    }
}