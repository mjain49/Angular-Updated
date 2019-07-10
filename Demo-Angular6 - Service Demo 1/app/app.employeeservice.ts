import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn:'root'  //root means it is accessible for all the components 
})


export class EmployeeService{

    constructor(private http:HttpClient){}   

    getAllEmployee(){
        return this.http.get("assets/employee.json") //or we can pass the url where data is stored 
    }
}