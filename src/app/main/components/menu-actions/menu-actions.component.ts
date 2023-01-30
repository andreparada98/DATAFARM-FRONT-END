import {Component} from '@angular/core';
import { MapService } from 'src/app/map/map.service';
import { DialogDashboardService } from '../../dialogs/dialog-dashboard/services/dioalog-dashboard.service';

@Component({
    selector: 'app-menu-actions',
    templateUrl: './menu-actions.component.html',
    styleUrls: ['./menu-actions.component.scss']
})
export class MenuActionsComponent {

    constructor(
        private mapService: MapService,
        private dialogDashboardService: DialogDashboardService
        ) {
    }

    openDashboard() {
        this.dialogDashboardService.open(this.mapService.activeField);
    }

    deleteField() {
        console.log('Delete Field');
        console.log(`idField: ${this.mapService.activeField}`);
    }
}
