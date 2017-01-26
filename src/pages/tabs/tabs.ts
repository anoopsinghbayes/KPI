import { Component } from '@angular/core';

import { salesPage } from '../sales/sales';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import { KpiPage  } from '../kpi/kpi';
import {appStore } from '../../../src/mock'

@Component({
  templateUrl: 'tabs.html',
  entryComponents:[KpiPage]
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = salesPage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
tabs:any;
kpiModel:any;
  constructor() {
    //this.kpiModel=
  ;
    
this.tabs = appStore;
  }
}
