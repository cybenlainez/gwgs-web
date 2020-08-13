import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApexOptions } from 'ng-apexcharts';
import { UsersService } from 'app/modules/admin/users/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector       : 'users',
    templateUrl    : './users.component.html',
    styleUrls      : ['./users.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersComponent implements OnInit, AfterViewInit, OnDestroy
{
    data: any;
    accountBalanceOptions: ApexOptions;
    recentTransactionsDataSource: MatTableDataSource<any>;
    recentTransactionsTableColumns: string[];

    @ViewChild('recentTransactionsTable', {read: MatSort})
    recentTransactionsTableMatSort: MatSort;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {UsersService} _usersService
     */
    constructor(
        private _usersService: UsersService,
        public httpClient: HttpClient)
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.recentTransactionsDataSource = new MatTableDataSource();
        // this.recentTransactionsTableColumns = ['transactionId', 'date', 'name', 'amount', 'status'];
        this.recentTransactionsTableColumns = ['userId', 'lastActionTime', 'lastLoginTime', 'name', 'emailAddress', 'active'];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {




        this.httpClient.get<any>('https://localhost:44369/api/AdminUser/GetAllAdminUserList').subscribe((res)=>{
            // this.recentTransactionsDataSource.data = res;
            this.recentTransactionsDataSource.data = res.entity;
            console.log(res);
            console.log(res.data);
        });





        

        // Get the data
        // this._usersService.data$
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((data) => {

        //         // Store the data
        //         this.data = data;

        //         // Store the table data
        //         this.recentTransactionsDataSource.data = data.recentTransactions;
        //     });
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
        // Make the data source sortable
        this.recentTransactionsDataSource.sort = this.recentTransactionsTableMatSort;
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
