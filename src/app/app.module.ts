import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { KpiPage } from '../pages/kpi/kpi';
import { ModalContentPage } from '../pages/kpi/kpi';
import { nvD3 } from 'ng2-nvd3';
@NgModule({
  declarations: [
    MyApp,
   TabsPage,
    KpiPage,
    ModalContentPage,
    nvD3
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    KpiPage,
    ModalContentPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
