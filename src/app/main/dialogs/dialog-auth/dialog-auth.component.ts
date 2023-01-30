import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";
import { AuthService } from 'src/app/auth/auth.service';
import { MapService } from 'src/app/map/map.service';

@Component({
    selector: 'app-dialog-auth',
    templateUrl: './dialog-auth.component.html',
    styleUrls: ['./dialog-auth.component.scss']
})
export class DialogAuthComponent {

    formControl = new FormControl('', [Validators.required]);

    constructor(
        public dialogRef: MatDialogRef<DialogAuthComponent>,
        private authService: AuthService,
        private mapService: MapService
    ) {
    }

    onSubmit() {
        if (!this.formControl.hasError('required')) {
            this.authService.setCode(this.formControl.value)
            this.dialogRef.close();
            this.dialogRef.afterClosed().subscribe(() => {
               this.mapService.requestGeometryField()
              });
        }
    }

}
