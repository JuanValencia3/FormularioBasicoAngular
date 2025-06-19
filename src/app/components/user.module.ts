import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormUserComponent } from './form-user/form-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserRoutingModule } from './user-routing.module';
import { FormUserEditComponent } from './edit-form-user/edit-form-user.component';

@NgModule({
  declarations: [FormUserComponent, ListUserComponent, FormUserEditComponent],
  exports: [],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, UserRoutingModule],
})
export class UserModule {}
