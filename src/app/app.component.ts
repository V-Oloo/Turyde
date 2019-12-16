import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event, NavigationStart, } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: `
              <div *ngIf="showLoadingIndicator">

                <ngx-spinner [fullScreen]="false" type="ball-clip-rotate-multiple" size="medium">
                  <p class="loading">Loading...</p>
                </ngx-spinner>

              </div>
             <router-outlet></router-outlet>
             `
})
export class AppComponent implements OnInit {
  showLoadingIndicator = true;
  constructor(private router: Router, private spinner: NgxSpinnerService) {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
       this.showLoadingIndicator = true;
       this.spinner.show();
      }

      if (routerEvent instanceof NavigationEnd) {
       this.showLoadingIndicator = true;
       this.spinner.hide();
     }

   } );
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
