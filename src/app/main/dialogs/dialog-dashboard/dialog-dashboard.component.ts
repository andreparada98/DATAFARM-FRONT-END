import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MapService } from 'src/app/map/map.service';
import { FieldModel } from './model/field.model';
import { DialogDashboardService } from './services/dioalog-dashboard.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dialog-dashboard',
  templateUrl: './dialog-dashboard.component.html',
  styleUrls: ['./dialog-dashboard.component.scss']
})
export class DialogDashboardComponent implements OnInit {
  form: FormGroup
  item: FieldModel
  unsubscribe: Subject<void> = new Subject<void>();
  public lineChart: Chart
  public barChart: Chart
  public pieChart: Chart
  
  constructor(
    private dialogDashboardService: DialogDashboardService,
    private mapService: MapService,
    private formBuilder: FormBuilder
  ) {
    this.item = new FieldModel()
  }

  ngOnInit(): void {
    this.createForm();
    this.loadData();
    this.createCharts();
  }

  createForm() {
    this.form = this.formBuilder.group({
      farm: [this.item.farm, [Validators.required]],
      field: [this.item.field, [Validators.required]],
      grower: [this.item.grower, [Validators.required]]
    })
  }

  loadData() {
    this.form.disable()
    this.dialogDashboardService.GetFieldData(this.mapService.activeField).pipe(takeUntil(this.unsubscribe)).subscribe((res:any) => {
      this.item = Object.assign(new FieldModel, res.data);
      this.form.patchValue(res.data)
    });
  }

  createCharts() {
    let { axisX, axisY }: {axisX: [], axisY: []} = {axisX: [], axisY: []}
    let { rainAxisX, rainAxisY }: {rainAxisX: [], rainAxisY: []} = {rainAxisX: [], rainAxisY: []}
    this.dialogDashboardService.GetFieldChart(this.mapService.activeField).pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      res.data.evolution.data.forEach((res: any) => {
        axisX.push(res.x as never)
        axisY.push(res.y as never)
      });
      res.data.rain.data.forEach((res: any) => {
        rainAxisX.push(res.x as never)
        rainAxisY.push(res.y as never)
      })
      this.createLineChart(axisX, axisY,  res.data.evolution.yLabel);
      this.createRainChart(rainAxisX, rainAxisY, res.data.rain.yLabel);
      this.createPieChart(res.data.efficiency.data, res.data.efficiency.label)
    })
  }

  createLineChart(axisX: [], axisY: [], yLabel: string) {
    this.lineChart = new Chart("line-chart", {
      type: 'line',
      data: {
        labels: axisX,
        datasets: [
          
          {
            label: yLabel,
            data: axisY,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1

          }
        ]
      },
      options: {
        aspectRatio: 2.5,
      }

    });
  }

  createRainChart(rainAxisX: [], rainAxisY: [], yLabel: string) {
    this.barChart = new Chart("bar-chart", {
      type: 'bar', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: rainAxisX,
          datasets: [
            {
              label: yLabel,
              data: rainAxisY,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgb(75, 192, 192)',
              borderWidth: 1
            }
          ],
      },
      options: {
        aspectRatio:2.5
      }
    });
  }

  createPieChart(data: number, label: string) {
    const calculatePercentage = 100 - data
    this.pieChart = new Chart("pie-chart", {
      type: 'pie', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['Efficiency', 'Not Efficiency'],
          datasets: [
            {
              label: label,
              data: [data,calculatePercentage],
              backgroundColor: [
                'rgba(75, 192, 192, 0.9)',
                '#FFF'
              ],
              borderColor:[
                'rgba(75, 192, 192)',
              '#FFF'],
              borderWidth: 1,
              hoverOffset: 4
            }
          ],
      },
      options: {
        aspectRatio:2.5
      }
    });
  }


}
