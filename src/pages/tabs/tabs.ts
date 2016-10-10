import { Component } from '@angular/core';

import { InformativesPage } from '../informatives/informatives';
import { AppointmentsPage } from '../appointments/appointments';
import { ChurchPage } from '../church/church';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = InformativesPage;
  tab2Root: any = AppointmentsPage;
  tab3Root: any = ChurchPage;

  constructor() {  }
}
