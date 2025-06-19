import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../components/list-user/list-user.component';

export interface RequestUser {
  name: string;
  email: string;
  isActive: boolean;
  age: number;
  role: 'admin' | 'user' | 'moderator';
  phone: string;
  address: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _http = inject(HttpClient);
  constructor() {}

  GetUserList() {
    return this._http.get<User[]>('http://localhost:3000/api/users');
  }

  // ✅ Método agregado para consultar por ID
  getUserById(id: number) {
    return this._http.get<User>(`http://localhost:3000/api/users/${id}`);
  }

  CreateUser(user: RequestUser) {
    return this._http.post<User>('http://localhost:3000/api/users', user);
  }

  EditUser(id: number, user: RequestUser) {
    return this._http.put<User>('http://localhost:3000/api/users/' + id, user);
  }

  DeleteUser(id: number) {
    return this._http.delete<User>('http://localhost:3000/api/users/' + id);
  }
}
