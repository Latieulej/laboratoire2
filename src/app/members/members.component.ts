import { Component } from '@angular/core';
import {Members} from "../models/Models";

@Component({
    selector : 'app-members',
    templateUrl: './members.component.html',
    styleUrls: [ './members.component.css' ]
})
export class MembersComponent {
    private members: Members[] = [
        new Members("Bricot","Judas"),
        new Members("Nanas","Judas"),
        new Members("Piteau","Chat")
    ];
}