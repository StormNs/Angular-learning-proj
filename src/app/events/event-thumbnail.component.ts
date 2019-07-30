import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {
    @Input() event: any;
    @Output() eventClickha1111 = new EventEmitter();
    // object: any = {
    //     'id': 5,
    //     'name': 'The joker', 
    //     events: this.event
    // }
    handleClickEvent(event:Event) {
        let object: any = {
            'id': 5,
            'name': 'The joker',
            events: this.event
        }
        this.eventClickha1111.emit(object);
        // event.stopPropagation();
    }

    getStartTimeClass(){
        // there 3 three way to return to ngClass
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart};
        // return ['green', 'bold']; 
        // return 'green bold'; //separate by space
    }

    outputFoo() {
        console.log("foo");

    }
}
