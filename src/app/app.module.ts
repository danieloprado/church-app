import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ChurchApp } from './app.component';

import * as Pages from '../pages/index';
import * as Providers from '../providers/index';
import * as Services from '../services/index';
import * as Directives from '../directives/index';

import { SlidesPage } from '../pages/slides/slides';


@NgModule({
  bootstrap: [IonicApp],
  declarations: [
    ChurchApp,
    Pages.TabsPage,
    Pages.ChurchPage,
    Pages.AppointmentsPage,
    Pages.InformativeListPage,
    Pages.InformativeDetailsPage,
    Directives.ChurchTitleDirective,
    SlidesPage
  ],
  imports: [
    IonicModule.forRoot(ChurchApp, {
      platforms: {
        android: {
          tabsPlacement: 'top',
        }
      }
    })
  ],
  entryComponents: [
    ChurchApp,
    Pages.ChurchPage,
    Pages.AppointmentsPage,
    Pages.InformativeListPage,
    Pages.InformativeDetailsPage,
    Pages.TabsPage,
    SlidesPage
  ],
  providers: [
    Storage,
    Providers.ApiHttp,
    Providers.Loader,
    Services.InformativeService
  ]
})
export class AppModule { }
