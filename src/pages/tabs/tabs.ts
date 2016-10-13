import { Component } from '@angular/core';

import { InformativeListPage } from '../informative/index';
import { AppointmentsPage } from '../appointments/appointments';
import { ChurchPage } from '../church/church';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  public tab1Root: any = InformativeListPage;
  public tab2Root: any = AppointmentsPage;
  public tab3Root: any = ChurchPage;

  constructor() {  }
}
