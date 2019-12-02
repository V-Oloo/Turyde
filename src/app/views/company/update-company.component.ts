import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styles: []
})
export class UpdateCompanyComponent implements OnInit {

  updateCompanyForm: FormGroup;
  submitted = false;
  errMessage: string;
  status = 'Active';
  company: any = [];

  currentUser = this.auth.currentUserValue;
  companyId: number = this.currentUser.companyId;

  constructor(private service: CompanyService, private fb: FormBuilder, private _router: Router, private auth: AuthService) { }

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
      status: [{ value: '', disabled: true }, ],
      createdAt: [{ value: '', disabled: true }, ]
    });
    this.getCompanyDetails();
  }
   // convenience getter for easy access to form fields
   get f() { return this.updateCompanyForm.controls; }

   onSubmit(data) {
     this.submitted = true;
     this.service.updateCompany(data)
        .subscribe();

   }

   getCompanyDetails() {
     this.service.getCompany(this.companyId).subscribe(data => this.editCompany(data));
   }

   editCompany(data) {
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
