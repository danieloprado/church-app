import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { ChurchPage } from '../pages/church/church';
import { AppointmentsPage } from '../pages/appointments/appointments';
import { InformativesPage } from '../pages/informatives/informatives';
import { TabsPage } from '../pages/tabs/tabs';

import { ApiHttp } from '../providers/apiHttp';
import { Loader } from '../providers/loader';

import { InformativeService } from '../services/informativeService';

import { ChurchTitleDirective } from '../directives/churchTitle';

@NgModule({
  bootstrap: [IonicApp],
  declarations: [
    MyApp,
    ChurchPage,
    AppointmentsPage,
    InformativesPage,
    TabsPage,
    ChurchTitleDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  entryComponents: [
    MyApp,
    ChurchPage,
    AppointmentsPage,
    InformativesPage,
    TabsPage
  ],
  providers: [
    Storage,
    ApiHttp,
    Loader,
    InformativeService
  ]
})
export class AppModule { }
