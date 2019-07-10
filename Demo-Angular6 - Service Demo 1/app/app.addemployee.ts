import { Component,OnInit} from "@angular/core";
import { EmployeeService } from './app.employeeservice';

@Component
({
    selector:'app-com',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent implements OnInit{
    
    constructor(private service:EmployeeService){}

    empAll:any[]=[];
    ngOnInit(){
       //to print using console
        // this.service.getAllEmployee().subscribe((data)=>console.log(data));
       
       //to print using html
       this.service.getAllEmployee().subscribe((data:any)=>this.empAll=data);
    }
    
    deleteEmp(index:number):any{
        this.empAll.splice(index,1);
   }
}