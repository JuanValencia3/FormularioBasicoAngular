import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { min, Subscription } from 'rxjs';
import { RequestUser, UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css',
})
export class FormUserComponent {
  private _subscription = new Subscription();
  private _Serviceuser = inject(UserService);
  private _router2 = inject(Router);
  form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(2),
      ],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(6),
        Validators.email,
      ],
    }),
    isActive: new FormControl(false, {
      nonNullable: true,
      validators: [Validators.required, Validators.requiredTrue],
    }),
    age: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1), Validators.max(100)],
    }),
    role: new FormControl<'admin' | 'user' | 'moderator'>('user', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    phone: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(7),
        Validators.pattern('^[0-9]*$'),
      ],
    }),
    address: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(2),
      ],
    }),
  });
  //metodo
  saveusuar() {
    console.log(this.form.getRawValue());
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      confirm('Todos los campos son requeridos');
      return;
    }
    const data: RequestUser = this.form.getRawValue();
    this.createuser(data);
  }

  createuser(user: RequestUser) {
    this._subscription.add(
      this._Serviceuser.CreateUser(user).subscribe({
        next: (value) => {
          console.log(value);
          this.form.reset();
          this._router2.navigateByUrl('user/list');
          confirm('registro exitoso');
        },
        error: () => {
          console.log('Error al registrar usuario');
        },
      })
    );
  }
}
