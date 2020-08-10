import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { UsersComponent } from 'app/modules/admin/users/users.component';
import { usersRoutes } from 'app/modules/admin/users/users.routing';

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports     : [
        RouterModule.forChild(usersRoutes),
        SharedModule
    ]
})
export class UsersModule
{
}
