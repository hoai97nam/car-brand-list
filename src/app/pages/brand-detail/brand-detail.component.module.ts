import { NzModalModule } from 'ng-zorro-antd/modal';
import { NgModule } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrandDetailComponent } from './brand-detail.component';

@NgModule({
  imports: [
    NzModalModule,
    NzDividerModule,
    NzInputModule,
    FormsModule,
    NzDropDownModule,
    NzIconModule
  ],
  declarations: [BrandDetailComponent],
  exports: [BrandDetailComponent]
})
export class BrandDetailModule { }
