import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../../_models/company.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styles: []
})
export class CompaniesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  companies: {};

  constructor(private auth: AuthService, private route: ActivatedRoute, private router: Router) {}

  currentUserSubject = this.auth.currentUserSub;

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
   this.route.data.subscribe((data: {companyList: Company}) => {
      this.companies = data.companyList;
   });
  }

  updateCompanyId(id: string) {
    const item = JSON.parse(localStorage.getItem('userContext'));
    item['companyId'] = id;
    item['boundary'] = 'COMPANY';
    localStorage.setItem('userContext', JSON.stringify(item));
    this.currentUserSubject.next(item);
    this.router.navigateByUrl('/company');
  }

}
