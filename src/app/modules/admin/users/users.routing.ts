import { Route } from '@angular/router';
import { UsersComponent } from 'app/modules/admin/users/users.component';
import { UsersResolver } from 'app/modules/admin/users/users.resolvers';

export const usersRoutes: Route[] = [
    {
        path     : '',
        component: UsersComponent,
        resolve  : {
            sales: UsersResolver
        }
    }
];
