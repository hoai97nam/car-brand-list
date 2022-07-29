import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CarBrandModel } from "src/app/models/car-brand.model";
import * as uuid from 'uuid';
import { NzUploadFile} from 'ng-zorro-antd/upload';

@Component({
    selector: 'add-modal',
    templateUrl: './add-modal.component.html',
    styleUrls: ['./add-modal.component.css']
})

export class AddModalComponent implements OnInit {
    fileList: NzUploadFile[] = []
    @Input() isVisible = false;
    @Output() handleOK = new EventEmitter<boolean>();
    @Output() addBrand = new EventEmitter<CarBrandModel>();
    inputValue: string | null = null;
    carBrand!: CarBrandModel;

    constructor() {
        this.carBrand = new CarBrandModel();
    }
    ngOnInit(): void {
        this.carBrand.id = uuid.v4();
        this.carBrand.active = false;
        this.carBrand.models = 0;
    }

    showModal(): void {
        this.isVisible = true;
    }

    handleOk(): void {
        this.isVisible = false;
        this.addBrand.emit(this.carBrand);        
        this.carBrand = new CarBrandModel();
    }

    handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
        this.carBrand = new CarBrandModel();
    }

    status_onClick() {
        this.carBrand.active = !this.carBrand.active;
    }
    handleChange(event: any){
        this.carBrand.logoUrl = 'https://picsum.photos/200/200';
    }
}