import { NgModule } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CarListComponent } from './car-list.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { ItemComponentsModule } from 'src/app/components/content-item/content-item.components.module';
import { CarBrandService } from 'src/app/services/car-brand.service';
import { BrowserModule } from '@angular/platform-browser';
import { AddModalModule } from 'src/app/components/add-modal/add-modal.module';
import { NzSelectModule } from 'ng-zorro-antd/select';



@NgModule({
    imports: [
        NzDropDownModule,
        NzIconModule,
        NzInputModule,
        FormsModule,
        ItemComponentsModule,
        BrowserModule,
        AddModalModule,
        NzSelectModule
    ],
    providers: [
        CarBrandService
    ],
    declarations: [
        CarListComponent,
        ],
    exports: [CarListComponent]
})
export class CarListModule { }
