import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController, NavParams, Platform, ViewController,Slides } from 'ionic-angular';
import { kpiStyle } from './kpi.scss';
import { appStore } from '../../../src/mock'
import {  FilterPage} from './../filter/filter';
import { KpiChartComponent } from './../../components/kpi-chart/kpi-chart';

import { ViewChild } from '@angular/core';
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
  @ViewChild('Slides') Slides: Slides;
  @Input() kpiData: any;
  card: any;
  tabs: any;
  selectedSegment: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.card = navParams.data;
    console.log('card', this.card);
    this.selectedSegment=this.card.table[0].metric;
  }
  // goTo(index){
  //   this.Slides.slideTo(index);
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad KpiPage');
  }
  presentFilter() {
    let modal = this.modalCtrl.create(FilterPage);
    modal.present();
  }
  presentChartModal() {
    let modal = this.modalCtrl.create(KpiChartComponent, { title:`${this.card.title} % Chng Vs Ly`,chartImg: "assets/img/map.png" });
    modal.present();
  }
  onSegmentChanged(segmentButton) {
    console.log("Segment changed to", segmentButton.value);
    const selectedIndex = this.card.table.findIndex((slide) => {
      return slide.metric === segmentButton.value;
    });
    this.Slides.slideTo(selectedIndex);
  }

   onSlideChanged(slider) {
    console.log('Slide changed');
    const currentSlide = this.card.table[slider.getActiveIndex()];
    if(currentSlide && currentSlide.metric)
      this.selectedSegment = currentSlide.metric;
  }



};


