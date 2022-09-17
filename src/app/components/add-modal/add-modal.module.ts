import { NzModalModule } from 'ng-zorro-antd/modal';
import { NgModule } from '@angular/core';
import { AddModalComponent } from './add-modal.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';

@NgModule({
  imports: [
    NzModalModule,
    NzDividerModule,
    NzInputModule,
    FormsModule,
    NzDropDownModule,
    NzIconModule,
    NzSelectModule,
    NzUploadModule,
    ReactiveFormsModule
  ],
  declarations: [AddModalComponent],
  exports: [AddModalComponent]
})
export class AddModalModule { }
