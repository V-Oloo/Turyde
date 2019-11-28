import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-register-company',
  templateUrl: 'register-company.component.html',
  styleUrls: ['register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {
  companyForm: FormGroup;
  public errMessage: string;
  constructor(private fb: FormBuilder, private service: CompanyService, private _router: Router) { }

  get shortName() {
    return this.companyForm.get('shortName');
  }

  get countryCode() {
    return this.companyForm.get('countryCode');
  }

  get primaryEmail() {
    return this.companyForm.get('primaryEmail');
  }

  get primaryMobileNo() {
    return this.companyForm.get('primaryMobileNo');
  }

  ngOnInit() {
    this.companyForm = this.fb.group({
      shortName: ['', [Validators.required]],
      countryCode: ['', [Validators.required]],
      primaryEmail: ['', [Validators.required, Validators.email, ]],
      primaryMobileNo: ['', [Validators.required]],
    });
  }

  registerCompany() {
      this.service.registerCompany(this.companyForm.value).subscribe((res: any) => {
        if (res) {
          this._router.navigateByUrl('/dashboard');
        }
      },
      (err: any) => {
        // this.errMessage = err.error.erro;
        console.log(err);
      }
    );
  }


}
