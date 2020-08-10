import { Route } from '@angular/router';
import { UsersComponent } from 'app/modules/admin/users/users.component';

export const usersRoutes: Route[] = [
    {
        path     : '',
        component: UsersComponent
    }
];
