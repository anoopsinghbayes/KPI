import { Component,ViewChild } from '@angular/core';
import { Platform ,Nav} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { appStore } from '../mock';
export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  
  index?: number;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
@ViewChild(Nav) nav: Nav;
 appPages: any;
  constructor(platform: Platform) {
    this.appPages=[
      {title:"KPI"},
      {title:"SAM's"},
      {title:"Walmart"},
      {title:"International"}
    ]

    this.rootPage = TabsPage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

   openPage(page: PageInterface) {
     this.nav.setRoot(page.component, { tabIndex: page.index });
   }
   isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().component === page.component) {
      return 'primary';
    }
    return;
  }
}
