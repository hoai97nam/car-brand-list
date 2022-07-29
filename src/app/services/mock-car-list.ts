import { formatDate } from "@angular/common";
import { CAR_BRAND_IMAGES_URL } from "src/app.config";
import { CarBrandModel } from "../models/car-brand.model";

const initialValue: CarBrandModel[] = [
    {
        id: 'C1',
        name: 'Toyota',
        description: 'Jeep Grand Cherokee',
        models: 1200,
        modified: formatDate(new Date('7/25/2022'), 'dd/MM/yyyy', 'en-US'),
        active: true,
        logoUrl: CAR_BRAND_IMAGES_URL.Toyota
    },
    {
        id: 'C2',
        name: 'BMW',
        description: 'Brand description is too long',
        models: 800,
        modified: formatDate(new Date('7/28/2022'), 'dd/MM/yyyy', 'en-US'),
        active: false,
        logoUrl: CAR_BRAND_IMAGES_URL.BMW
    },
    {
        id: 'C3',
        name: 'MAZDA',
        description: 'Audi Q7',
        models: 620,
        modified: formatDate(new Date('7/20/2022'), 'dd/MM/yyyy', 'en-US'),
        active: true,
        logoUrl: CAR_BRAND_IMAGES_URL.MAZDA
    },
    {
        id: 'C4',
        name: 'Hyundai',
        description: 'Brand description is too long',
        models: 4260,
        modified: formatDate(new Date('7/21/2022'), 'dd/MM/yyyy', 'en-US'),
        active: false,
        logoUrl: CAR_BRAND_IMAGES_URL.Hyundai
    },
    {
        id: 'C5',
        name: 'KIA',
        description: 'Dodge Charger',
        models: 620,
        modified: formatDate(new Date('7/26/2022'), 'dd/MM/yyyy', 'en-US'),
        active: true,
        logoUrl: CAR_BRAND_IMAGES_URL.KIA
    },
    {
        id: 'C6',
        name: 'Nissan',
        description: 'Brand description is too long',
        models: 4260,
        modified: formatDate(new Date('7/24/2022'), 'dd/MM/yyyy', 'en-US'),
        active: false,
        logoUrl: CAR_BRAND_IMAGES_URL.Nissan
    },
]

export class MockCarList {
    static GetAll(): CarBrandModel[] {
        return initialValue;
    }

    static GetById(id: string): CarBrandModel[] {
        return initialValue.filter(x => x.id === id);
    }
}
