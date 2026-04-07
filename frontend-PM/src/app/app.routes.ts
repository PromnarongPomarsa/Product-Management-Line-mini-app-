import { Routes } from '@angular/router';
import { DashbordComponent } from './features/dashbord-component/dashbord-component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
    { path: 'dashbord', component: DashbordComponent }
];
