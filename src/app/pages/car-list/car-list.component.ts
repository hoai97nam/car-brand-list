import { formatDate } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NzModalService } from "ng-zorro-antd/modal";
import { Subscription } from "rxjs";
import { CarBrandModel } from "src/app/models/car-brand.model";
import { CarBrandService } from "src/app/services/car-brand.service";
import * as _ from 'lodash';

@Component({
    selector: 'car-list',
    templateUrl: './car-list.component.html',
    styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit, OnDestroy {

    mainSubscription: Subscription;
    carBrandData!: CarBrandModel[];
    carBrandDataBackup!: CarBrandModel[];
    isModalOn: boolean = false;
    optionList = [
        { label: 'All', value: 'all' },
        { label: 'Last Updated', value: 'time' },
        { label: 'Brand Name', value: 'name' },
        { label: 'Number of Models', value: 'models' }
    ];
    selectedValue = { label: 'View All', value: 'all' };
    searchText: string = '';

    constructor(
        private carBrand: CarBrandService,
        private router: Router,
        private modalService: NzModalService
    ) {
        this.mainSubscription = new Subscription();
    }
    ngOnInit() {
        this.mainSubscription.add(this.carBrand.getMaintainData().subscribe((res: any) => {
            if (res) {
                this.carBrandData = _.cloneDeep(res);
                this.carBrandDataBackup = _.cloneDeep(res);
            }
        }))
    }

    ngOnDestroy(): void {
        this.mainSubscription.unsubscribe();
    }

    addBrand() {
        this.isModalOn = true;
    }

    catchOk(event: CarBrandModel) {
        if (event) {
            this.isModalOn = false;
            console.log(event);
            if (event.name && event.description) {
                event.modified = formatDate(new Date(), 'dd/MM/yyyy', 'en-US')
                this.carBrandData.push(event)
                this.carBrand.setMaintainData(this.carBrandData);
                this.success(event.name);
            }
            else {
                this.error();
            }
        }
    }

    viewDetail(event: string) {
        if (event) {
            this.router.navigate(
                ['/brand-detail'],
                { queryParams: { id: event } }
            );
        }
    }

    success(name: string): void {
        const modal = this.modalService.success({
            nzTitle: 'Add Successfully',
            nzContent: `Brand with name ${name} was updated`
        });
        setTimeout(() => {
            modal.destroy();
        }, 1200);
    }

    error(): void {
        const modal = this.modalService.error({
            nzTitle: 'Add Failed',
            nzContent: 'Name or description are empty',
        });
        setTimeout(() => {
            modal.destroy();
        }, 1200);
    }

    filter_onChoose(value: { label: string; value: string }): void {
        if (value.value) {
            switch (value.value) {
                case 'all':
                    this.carBrandData = _.sortBy(this.carBrandData, 'name');
                    break;
                case 'time':
                    this.carBrandData = _.sortBy(this.carBrandData, 'modified');
                    break;
                case 'name':
                    this.carBrandData = _.sortBy(this.carBrandData, 'name');
                    break;
                case 'models':
                    this.carBrandData = _.sortBy(this.carBrandData, 'models');
                    break;
                default:
                    break;
            }
        }
    }

    onSearch(event: any) {
        if (event) {
            let text = event.toString().trim();
            this.carBrandData = this.carBrandData.filter(i => _.includes(i.name?.toLowerCase(), text.toLowerCase()));
        }
    }
    refresh_onClick() {
        this.carBrandData = this.carBrandDataBackup;
        this.searchText = '';        
    }
}