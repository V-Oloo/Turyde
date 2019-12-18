import { ActivatedRoute } from '@angular/router';
import { DriverService } from './../../services/driver.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: []
})
export class DriversComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  currentUser = this.auth.currentUserValue;
  companyId: number = this.currentUser.companyId;
  drivers: any = [];

  dtTrigger: Subject<any> = new Subject();

  public status = 'suspended';
  constructor(
    private auth: AuthService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.route.data.subscribe((data: {drivers: any}) => {
      this.drivers = data.drivers;
    });


  }

}
