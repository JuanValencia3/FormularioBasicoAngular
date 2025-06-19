import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { FormUserComponent } from './form-user/form-user.component';
import { FormUserEditComponent } from './edit-form-user/edit-form-user.component';

const router: Route[] = [
  {
    path: 'list',
    component: ListUserComponent,
  },
  {
    path: 'create',
    component: FormUserComponent,
  },
  {
    path: 'edit/:id',
    component: FormUserEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
