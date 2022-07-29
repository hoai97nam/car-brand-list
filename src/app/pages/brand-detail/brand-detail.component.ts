import { formatDate } from "@angular/common";
import { Component, OnDestroy, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CarBrandModel } from "src/app/models/car-brand.model";
import { CarBrandService } from "src/app/services/car-brand.service";
import { NzModalService } from 'ng-zorro-antd/modal';
import * as _ from 'lodash';

@Component({
    selector: 'brand-detail',
    templateUrl: './brand-detail.component.html',
    styleUrls: ['./brand-detail.component.css']
})

export class BrandDetailComponent implements OnInit, OnDestroy {
    inputValue: string | null = null;
    id!: string;
    data!: CarBrandModel[];
    carBrandData!: CarBrandModel[];
    mainSubscription: Subscription;
    onEditable: boolean = false;

    constructor(
        private carBrand: CarBrandService,
        private router: Router,
        private route: ActivatedRoute,
        private modalService: NzModalService
    ) {
        this.mainSubscription = new Subscription();
        this.route.queryParams.subscribe((res: any) => {
            if (res) {
                this.id = res.id;
            }
        })

    }

    ngOnInit(): void {
        this.mainSubscription.add(this.carBrand.getMaintainData().subscribe((res: CarBrandModel[]) => {
            if (res) {
                let container = _.cloneDeep(res);
                this.data = container.filter(x => x.id === this.id);
                console.log('detail: ', this.data[0]);
                
                this.carBrandData = container;
            }
        }))
    }

    ngOnDestroy(): void {
        this.mainSubscription.unsubscribe();
    }

    back2BrandList() {
        this.router.navigate(['car-brand-list'])
    }

    saveChange_onCLick() {
        this.data[0].modified = formatDate(new Date(), 'dd/MM/yyyy', 'en-US')
        this.carBrandData.map((todo, i) => {
            if (todo.id === this.data[0].id) {
                this.carBrandData[i] = this.data[0];
            }
        });

        this.carBrand.setMaintainData(this.carBrandData);
        this.success(this.data[0].name?this.data[0].name :'');
    }

    edit_onClick() {
        this.onEditable = true;
    }
    
    success(name: string): void {
        const modal = this.modalService.success({
            nzTitle: 'Update Successfully',
            nzContent: `Brand with name ${name} was updated`
        });
        setTimeout(() => {
            modal.destroy();
            this.router.navigate(['car-brand-list']);
        }, 1200);
    }

    status_onClick() {
        this.data[0].active = !this.data[0].active
    }

    changeLogo_onClick() {
        if (this.onEditable) {
            this.data[0].logoUrl = 'https://picsum.photos/70/70';            
        }
    }

}