import { Component, OnInit } from "@angular/core";
import{ EmployeeService} from './app.employeeservice'

@Component({
    selector:'show-com',
    templateUrl:'showEmployee.html'
})

export class ShowEmployeeComponent implements OnInit{
    constructor(private service:EmployeeService){}

    empAll:any[]=[];
    ngOnInit(): void {
        this.service.getAllEmployee().subscribe((data:any)=>this.empAll=data);
    }

}
