import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Observable } from 'rxjs';
import { DialogDashboardComponent } from '../dialog-dashboard.component';
import { FieldChartModel } from '../model/field-chart.model';
import { FieldModel } from '../model/field.model';

@Injectable({
    providedIn: 'root'
})
export class DialogDashboardService {
    constructor(
        private matDialog: MatDialog,
        private httpClient: HttpClient
    ) { }

    open(fieldId: string | undefined) {
        console.log(fieldId)
        this.matDialog.open(DialogDashboardComponent, {
            width: '70vw',
            height: '80vh',
            //disableClose: true
        });
    }

    GetFieldData(fieldId: string | undefined): Observable<FieldModel> {
       return this.httpClient.get<FieldModel>(`/api/field/${fieldId}`)
    }

    GetFieldChart(fieldId: string | undefined): Observable<FieldChartModel> {
        return this.httpClient.get<FieldChartModel>(`/api/field/${fieldId}/dashboard`)
    }
}