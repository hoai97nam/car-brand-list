import { NgModule } from '@angular/core';
import { ContentItemComponent } from './content-item.component';
import { NzPipesModule } from 'ng-zorro-antd/pipes';

@NgModule({
  imports: [
    NzPipesModule
  ],
  declarations: [ContentItemComponent],
  exports: [ContentItemComponent]
})
export class ItemComponentsModule { }
