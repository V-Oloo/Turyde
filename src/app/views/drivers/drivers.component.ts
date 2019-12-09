import { DriverService } from './../../services/driver.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: []
})
export class DriversComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};

  currentUser = this.auth.currentUserValue;
  companyId: number = this.currentUser.companyId;
  drivers: any = [];

  dtTrigger: Subject<any> = new Subject();

  public status = 'suspended';
  constructor(private _service: DriverService, private auth: AuthService) {}

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this._service.getDrivers(this.companyId).subscribe(drivers => {
      this.drivers = drivers;
      this.dtTrigger.next();
    });


  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
