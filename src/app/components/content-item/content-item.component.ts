import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CarBrandModel } from "src/app/models/car-brand.model";

@Component({
    selector: 'content-item',
    templateUrl: './content-item.component.html',
    styleUrls: ['./content-item.component.css']
})

export class ContentItemComponent {
    @Input() carBrand: CarBrandModel | undefined;
    @Output() viewDetail = new EventEmitter<string>();
    constructor() {
    }

    viewDetail_onClick(event: any) {
        this.viewDetail.emit(event)
    }

}