import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandDetailComponent } from './pages/brand-detail/brand-detail.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { WelcomeComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/car-brand-list' },
  { path: 'car-brand-list', component: CarListComponent },
  { path: 'brand-detail', component: BrandDetailComponent },
  { path: '**', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
