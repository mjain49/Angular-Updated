import { Component,Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'add-comp',
    templateUrl:'addemployee.html'
})

export class AddEmployeeComponent{
        @Input()
        inchild:string;
        @Output()
        notify:EventEmitter<string>=new EventEmitter<string>();
        @Input()
        inchild1:string;

        callingParent():any{
            this.notify.emit("From Child..... Data Sent");
        }
}