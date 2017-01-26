import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { KpiPage } from '../kpi/kpi';

@Component({
  selector: 'sales-home',
  templateUrl: 'sales.html'
})
export class salesPage {

  constructor(public navCtrl: NavController) {

  }

}
