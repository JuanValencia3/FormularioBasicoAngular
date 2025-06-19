import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

export interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  age: number;
  role: 'admin' | 'user' | 'moderator';
  createdAt: string;
  phone: string;
  address: string;
}

@Component({
  standalone: false,
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css',
})
export class ListUserComponent implements OnInit, OnDestroy {
  users: User[] = [];
  selectedUser?: User;
  userNotFound = false;
  loading = true;

  private _subscription = new Subscription();
  private _Serviceuser = inject(UserService);
  private _router = inject(Router);

  constructor() {
    this._router;
  }

  ngOnInit(): void {
    this.getList();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
  private getList() {
    this.loading = true;
    this._subscription.add(
      this._Serviceuser.GetUserList().subscribe({
        next: (value) => {
          this.users = value;
          this.loading = false;
          console.log('Usuarios cargados:', this.users);
        },
        error: () => {
          console.error('Error al consultar usuarios');
        },
      })
    );
  }

  selectUserById(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (user) {
      this.selectedUser = user;
      this.userNotFound = false;
    } else {
      this.selectedUser = undefined;
      this.userNotFound = true;
    }
  }
  edituser(id: number) {
    this._router.navigateByUrl('user/edit/' + id);
  }

  deleteuser(id: number) {
    console.log(id);
    this._Serviceuser.DeleteUser(id).subscribe({
      next: () => {
        this.getList();
        confirm('Eliminacion exitosa');
      },
    });
  }
  redirect() {
    this._router.navigateByUrl('user/create');
  }
}
