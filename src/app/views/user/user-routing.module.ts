import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user.component';
import { UserProfileComponent } from './user-profile.component';
import { UpdateUserProfileComponent } from './update-user-profile.component';
import { UserProfileResolverService } from './user-profile-resolver.service';


const routes: Routes = [
  {
    path: 'addUser',
    component: AddUserComponent,
    data: {
      title: 'Add User'
    }
  },
  {
    path: 'user-profile/:id',
    component: UserProfileComponent,
    resolve: {user: UserProfileResolverService},
    data: {
      title: 'User Profile'
    }
  },
  {
    path: 'update-user/:id',
    component: UpdateUserProfileComponent,
    resolve: {user: UserProfileResolverService},
    data: {
      title: 'Update User Profile'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
