import { Route } from '@angular/router';
import { FinanceComponent } from 'app/modules/admin/finance/finance.component';
import { FinanceResolver } from 'app/modules/admin/finance/finance.resolvers';

export const financeRoutes: Route[] = [
    {
        path     : '',
        component: FinanceComponent,
        resolve  : {
            sales: FinanceResolver
        }
    }
];
