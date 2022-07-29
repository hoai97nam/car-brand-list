import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ItemComponentsModule } from './components/content-item/content-item.components.module';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { CarListModule } from './pages/car-list/car-list.module';
import { AddModalModule } from './components/add-modal/add-modal.module';
import { CarBrandService } from './services/car-brand.service';
import { BrandDetailModule } from './pages/brand-detail/brand-detail.component.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
    NzDropDownModule,
    NzRadioModule,
    AddModalModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, CarBrandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
