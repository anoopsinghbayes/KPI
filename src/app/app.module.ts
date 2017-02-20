import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { KpiPage } from '../pages/kpi/kpi';
import { KpiChartComponent } from '../components/kpi-chart/kpi-chart';
import { nvD3 } from 'ng2-nvd3';
import {FilterPage  } from '../pages/filter/filter';
import  {PushButtonComponent } from '../components/push-button/push-button';

@NgModule({
  declarations: [
    MyApp,
   TabsPage,
    KpiPage,
    KpiChartComponent,
    nvD3,
    FilterPage,
    PushButtonComponent,
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    KpiPage,
    KpiChartComponent,
    FilterPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
