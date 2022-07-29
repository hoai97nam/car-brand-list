import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarBrandService } from './services/car-brand.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isCollapsed = false;
  mainSubscription: Subscription;

  constructor(
    private carBrand: CarBrandService,) {
    this.mainSubscription = new Subscription();

  }

  ngOnInit(): void {
    this.carBrand.AllCarBrand();
    this.mainSubscription.add(this.carBrand.statusCarBrand.subscribe((res: any) => {
      if (res) {
        this.carBrand.setMaintainData(_.cloneDeep(res));
      }
    }))
  }
  ngOnDestroy(): void {
    this.mainSubscription.unsubscribe();
  }
}
