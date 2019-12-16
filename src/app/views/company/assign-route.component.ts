import { CompanyService } from './../../services/company.service';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-assign-route',
  templateUrl: './assign-route.component.html',
  styles: []
})
export class AssignRouteComponent implements OnInit {
  public option: {};
  routeForm: FormGroup;
  submitted = false;
  errMessage: string;
  paths = [];
  params = 'path=color:0x0000ff|weight:5';
  API_KEY = 'AIzaSyDhZ6_8A8mz2jCY3QpHOjr0np3KWseDUxc';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private auth: AuthService,
    private service: CompanyService,
    private toastr: ToastrService,
    ) { }

  currentUser = this.auth.currentUserValue;
  companyId = this.currentUser.companyId;

  get id() {
    return this.routeForm.get('id');
  }

  ngOnInit() {
    this.routeForm = this.fb.group({
      routeId: ['', [Validators.required]],
      name: [{ value: '', disabled: true }, [Validators.required]],
      distanceKm: [{ value: '', disabled: true }, [Validators.required]],
      peakRate: ['', [Validators.required]],
      offPeakRate: ['', [Validators.required]]
    });
    this.route.data.subscribe((data: { route: any }) => {
      this.paths = data.route.paths;
      this.pathsLoc(this.paths);
      this.displayRoute(data.route);
   });
  }

  onSubmit(data: any) {
    this.submitted = true;
    // console.log(data);
    if (this.routeForm.invalid) {
      return;
    }
    this.service.assignCompanyRoute(this.companyId, data).subscribe(res => {
      this.routeForm.reset();
      this.toastr.success('Route added successfully!', 'Route Added');
    },
    (error: any) => {
      this.errMessage = error.error;
      console.log(error);
    }
    );
  }

  displayRoute(data: any) {
    this.routeForm.patchValue({
      routeId: data.id,
      name: data.name,
      distanceKm: data.distanceKm,
      peakRate: data.defaultPeakRate,
      offPeakRate: data.defaultOffPeakRate
    });
  }

  pathsLoc(data: any) {
    for (const path of data) {
      this.params += '|' + path.gLat + ',' + path.gLong;
      console.log(this.params);
  }
  }

}
