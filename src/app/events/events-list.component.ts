import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
     selector: 'app-events-list',
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.css']
})
export class EventListComponent implements OnInit {
    // thumbnail: any;
    events: any[];

    /**
     * Get data from service
     */
    constructor(private eventService: EventService,
        private toastr: ToastrService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        // this.eventService.getEvents().subscribe(events => {this.events = events});
        this.events = this.route.snapshot.data['events'];
    }

    handleClickEvent(data) {
        console.log('re:', { data })
        this.toastr.warning(JSON.stringify(data));
    }

    /**
     * Still developing
     */
    callFoo() {

    }

    handleThumbnailClick1(evtName) {
        this.toastr.success(evtName);
    }


}
