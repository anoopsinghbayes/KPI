import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { kpiStyle } from './kpi.scss';
import * as d3 from 'd3';
declare var nv: any;
import { nvD3 } from 'ng2-nvd3';
import { appStore } from '../../../src/mock'
import { kpiChartData } from './kpiData';
import {  FilterPage} from './../filter/filter';
/*
  Generated class for the Kpi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-kpi',
  templateUrl: 'kpi.html',
  styles: [``]
})
export class KpiPage {
  @Input() kpiData: any;
  card: any;
  tabs: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.card = navParams.data;
    console.log('card', this.card);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KpiPage');
  }
  presentFilter() {
    let modal = this.modalCtrl.create(FilterPage);
    modal.present();
  }
  presentChartModal() {
    let modal = this.modalCtrl.create(ModalContentPage, { title:`${this.card.title} % Chng Vs Ly`,chartImg: "assets/img/map.png" });
    modal.present();
  }



};

@Component({

  template: `<ion-header>
  <ion-toolbar>
    <ion-title>
      {{title}}
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <div>
  <nvd3 [options]="options" [data]="data"></nvd3>
  </div>
  <div class='map-container'>
  <img [src]="img">
  </div>
</ion-content>`,
styles:[`.map-container{
    padding:5px;
}`]
})
export class ModalContentPage implements OnInit {
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
        color: ['#05af05'],
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
