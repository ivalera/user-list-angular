import { Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
      },
      {
        path: 'user-details/:id',
        component: UserDetailsComponent,
        title: 'User details',
      },
];
