import { Routes } from '@angular/router';
import { DashbordComponent } from './features/dashbord-component/dashbord-component';
import { ProductInfoComponent } from './features/product_info/product-info.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
    { path: 'dashbord', component: DashbordComponent},
    { path: 'product/:id', component: ProductInfoComponent},
];
