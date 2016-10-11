import { Component } from '@angular/core';

import { InformativeListPage } from '../informative/index';
import { AppointmentsPage } from '../appointments/appointments';
import { ChurchPage } from '../church/church';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  barColor: string;
  tab1Root: any = InformativeListPage;
  tab2Root: any = AppointmentsPage;
  tab3Root: any = ChurchPage;

  constructor() {  }
}
