import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
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

  constructor(private service: CompanyService, private fb: FormBuilder, private _router: Router) { }

  ngOnInit() {
    this.updateCompanyForm = this.fb.group({
      shortName: ['', ],
      countryCode: ['', ],
      currencyCode: ['', ],
      legalName: ['', ],
      govRegNo: ['', ],
      govTaxNo: ['', ],
      primaryEmail: ['', ],
      primaryMobileNo: ['', ],
      pEmailVerified: ['', ],
      pMobileVerified: ['', ],
      status: [this.status, ],
      createdAt: ['2019-11-28T07:36:47.120Z', ]
    });
  }
   // convenience getter for easy access to form fields
   get f() { return this.updateCompanyForm.controls; }

   onSubmit(data) {
      this.service.updateCompany(data)
        .subscribe();

   }

}
