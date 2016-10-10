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

import { AuthService } from '../services/authService';
import { InformativeService } from '../services/informativeService';

@NgModule({
  declarations: [
    MyApp,
    ChurchPage,
    AppointmentsPage,
    InformativesPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
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
    AuthService,
    InformativeService
  ]
})
export class AppModule { }
