import { Component,OnInit } from '@angular/core';
import { Platform,NavParams,ViewController } from 'ionic-angular';
import { kpiChartData } from './../../pages/kpi/kpiData';

import * as d3 from 'd3';
declare var nv: any;
//import { nvD3 } from 'ng2-nvd3';

/*
  Generated class for the KpiChart component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'kpi-chart',
  templateUrl: 'kpi-chart.html'
})
export class KpiChartComponent implements OnInit {
  img: String;
  options;
  data;
  title;
  constructor(public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {
    this.img = params.get('chartImg');
    this.title=params.get('title');

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
   
  ngOnInit() {
    this.options = {
      chart: {
        type: 'discreteBarChart',
        color: ['#7abf4b','#3b7c3f'],
        height: 300,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 70
        },
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },
        showValues: true,
        valueFormat: function (d) {
          return d3.format(',%')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10,

        }
      }
    }

    let tempData = new kpiChartData();
    console.log(tempData);
    this.data = [tempData];
  }
}
