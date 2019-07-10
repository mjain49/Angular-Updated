import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'show-emp',
    templateUrl:'showemp.html'
})

export class showEmployee{
    @Input()
    inchild1:string
    @Output()
    notify:EventEmitter<string>=new EventEmitter<string>();

    callingAddParent():any{
        this.notify.emit("From Child i.e. from show Employeee to ..... Data Sent i.e. to Parent Add Employee");
    }
}