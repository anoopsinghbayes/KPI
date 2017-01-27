import { Component } from '@angular/core';

import {appStore } from '../../../src/mock'

@Component({
  templateUrl: 'tabs.html',
  //entryComponents:[KpiPage]
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
 tabs:any;
kpiModel:any;
  constructor() {
    //this.kpiModel=
  ;
    
this.tabs = appStore;
  }
}
