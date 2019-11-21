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
  constructor(private fb: FormBuilder, private service: CompanyService) { }

  get companyName() {
    return this.companyForm.get('companyName');
  }

  get countryCode() {
    return this.companyForm.get('countryCode');
  }

  get currencyCode() {
    return this.companyForm.get('currencyCode');
  }

  ngOnInit() {
    this.companyForm = this.fb.group({
      companyName: ['', [Validators.required]],
      countryCode: ['', [Validators.required]],
      currencyCode: ['', [Validators.required]],
    });
  }

  registerCompany(formData) {
      this.service.registerCompany(formData).subscribe((res: any) => {
        if (res) {
          console.log(res);
        }
      },
      (err: any) => {
        // this.errMessage = err.error.erro;
        console.log(err);
      }
    );
  }

}
