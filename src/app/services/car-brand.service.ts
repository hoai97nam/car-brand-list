import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { CarBrandModel } from "../models/car-brand.model";
import { MockCarList } from "./mock-car-list";

@Injectable()
export class CarBrandService {
    constructor() {

    }

    statusCarBrand = new BehaviorSubject<CarBrandModel[]>([]);
    getErrorCarBrand = this.statusCarBrand.asObservable();
    AllCarBrand() {
        const res = MockCarList.GetAll();
        if (res) {
            this.statusCarBrand.next([]);
        }
        this.statusCarBrand.next(res)
    }

    private middleSubject = new BehaviorSubject<CarBrandModel[]>([]);

    setMaintainData(data: CarBrandModel[]) {
        this.middleSubject.next(data);
    }

    getMaintainData(): Observable<CarBrandModel[]> {
        return this.middleSubject.asObservable();
    }
}