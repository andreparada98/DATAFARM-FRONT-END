import {Component, OnInit} from '@angular/core';
import {DialogAuthService} from "../main/dialogs/dialog-auth/services/dialog-auth.service";

@Component({
    selector: 'app-application',
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit{
    constructor(private dialogAuthService: DialogAuthService) {}

    ngOnInit() {
        this.dialogAuthService.open();
    }
}
