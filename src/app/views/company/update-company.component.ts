import { CompanyService } from './../../services/company.service';
import { Company } from './../../_models/company.model';
import { AuthService } from './../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { VehicleType } from '../../_models/vehicleType.model';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styles: []
})
export class UpdateCompanyComponent implements OnInit {

  updateCompanyForm: FormGroup;
  submitted = false;
  errMessage: string;
  public option: {};

  currentUser = this.auth.currentUserValue;
  companyId: number = this.currentUser.companyId;

  constructor(
    private fb: FormBuilder,
    private _route: ActivatedRoute,
    private auth: AuthService,
    private _service: CompanyService
    ) { }

  ngOnInit() {
    this.updateCompanyForm = this.fb.group({
      shortName: ['', [Validators.required] ],
      countryCode: ['', ],
      currencyCode: ['', ],
      legalName: ['', ],
      govRegNo: ['', ],
      govTaxNo: ['', ],
      primaryEmail: ['', ],
      primaryMobileNo: ['', ],
      pEmailVerified: ['', ],
      pMobileVerified: ['', ],
      id: [this.companyId, ],
      status: [{ value: '', disabled: true }, ],
      createdAt: [{ value: '', disabled: true }, ]
    });

    this._route.data.subscribe((data: {company: Company}) => {
      this.editCompany(data.company);
  });
  }
   // convenience getter for easy access to form fields
   get f() { return this.updateCompanyForm.controls; }

   onSubmit(data) {
     this.submitted = true;
     this._service.updateCompany(this.companyId, data)
        .subscribe();

   }

   editCompany(data: Company) {
     this.updateCompanyForm.patchValue({
      shortName: data.shortName,
      countryCode: data.countryCode,
      currencyCode: data.currencyCode,
      legalName: data.legalName,
      govRegNo: data.govRegNo,
      govTaxNo: data.govTaxNo,
      primaryEmail: data.primaryEmail,
      primaryMobileNo: data.primaryMobileNo,
      pEmailVerified: data.pEmailVerified,
      pMobileVerified: data.pMobileVerified,
      status: data.status,
      createdAt: data.createdAt,
     });
   }

}
