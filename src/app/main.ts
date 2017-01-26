import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import 'nvd3/build/nv.d3';
platformBrowserDynamic().bootstrapModule(AppModule);
