import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApexOptions } from 'ng-apexcharts';
import { FinanceService } from 'app/modules/admin/finance/finance.service';

@Component({
    selector       : 'finance',
    templateUrl    : './finance.component.html',
    styleUrls      : ['./finance.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinanceComponent implements OnInit, AfterViewInit, OnDestroy
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
     * @param {FinanceService} _financeService
     */
    constructor(
        private _financeService: FinanceService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();

        // Set the defaults
        this.recentTransactionsDataSource = new MatTableDataSource();
        this.recentTransactionsTableColumns = ['transactionId', 'date', 'name', 'amount', 'status'];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the data
        this._financeService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {

                // Store the data
                this.data = data;

                // Store the table data
                this.recentTransactionsDataSource.data = data.recentTransactions;
            });
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
