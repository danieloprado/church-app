import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChurchPage } from '../pages/church/church';
import { AppointmentsPage } from '../pages/appointments/appointments';
import { InformativesPage } from '../pages/informatives/informatives';
import { TabsPage } from '../pages/tabs/tabs';

import { Storage } from '@ionic/storage';
import { AuthService } from '../providers/authService';
import { ApiHttp } from '../providers/apiHttp';
import { InformativeService } from '../providers/informativeService';

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
    AuthService,
    ApiHttp,
    InformativeService
  ]
})
export class AppModule { }
