import { UpdateUserProfileComponent } from './update-user-profile.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user.component';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { UserProfileComponent } from './user-profile.component';


@NgModule({
  declarations: [AddUserComponent, UserProfileComponent, UpdateUserProfileComponent],
  imports: [
    UserRoutingModule,
    SharedModule,
    InternationalPhoneNumberModule,
  ]
})
export class UserModule { }
