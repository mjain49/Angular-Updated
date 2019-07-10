import { Component, OnInit, Input, SimpleChanges, OnChanges } from "@angular/core";
import { EmployeeService } from "./app.empService";


@Component({
    selector:'show-com',
    templateUrl:'showEmployee.html'
})

export class ShowEmployeeComponent implements OnInit,OnChanges{

   // index:number=null;

    @Input()
    empId:number=null;
    @Input()
    empName:string=null;
    @Input()
    empSalary:number=null;
    @Input()
    status:boolean;
    
    constructor(private service:EmployeeService){}
    
    empAll:any[]=[];
    ngOnInit(){
        //to print using html
        this.service.getAllEmployee().subscribe((data:any)=>this.empAll=data);
     }

     ngOnChanges(changes: SimpleChanges){
        if(changes['status']){
            if(this.empId != null)
           this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary})
        }
    }
}