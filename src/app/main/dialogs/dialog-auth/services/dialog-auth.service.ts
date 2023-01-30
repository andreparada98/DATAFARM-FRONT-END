import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogAuthComponent} from "../dialog-auth.component";

@Injectable({
    providedIn: 'root'
})
export class DialogAuthService {

    constructor(
        private matDialog: MatDialog,
    ) {}

    open() {
        this.matDialog.open(DialogAuthComponent, {
            width: '450px',
            height: '250px',
            disableClose: true
        });
    }
}
