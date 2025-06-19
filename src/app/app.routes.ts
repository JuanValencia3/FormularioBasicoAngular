import { Routes } from '@angular/router';
import { HelloWorkComponent } from './components/Hello-work/Hello-work.component';

export const routes: Routes = [
  {
    path: '',
    component: HelloWorkComponent,
  },
  {
    path: 'user',
    loadChildren: () => {
      return import('./components/user.module').then((m) => m.UserModule);
    },
  },
];
