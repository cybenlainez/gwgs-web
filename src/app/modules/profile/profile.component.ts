import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
    selector       : 'profile',
    templateUrl    : './profile.component.html',
    styleUrls      : ['./profile.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileComponent
{
    /**
     * Constructor
     */
    constructor(public httpClient: HttpClient){
         
    }

    sendGetRequest(){
        this.httpClient.get('https://localhost:44369/api/AdminUser/GetAllAdminUserList').subscribe((res)=>{
            console.log(res);
        });
    }
}
