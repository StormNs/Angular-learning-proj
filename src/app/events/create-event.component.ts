import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "../common/toastr.service";

@Component({
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent {
    isDirty: boolean = false;
    /**
     *
     */
    constructor(private router: Router, private toastr: ToastrService) {

    }

    cancel() {
        this.router.navigate(['/events']);
    }
}