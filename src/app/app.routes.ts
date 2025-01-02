import { Routes } from '@angular/router';
import { StoreViewComponent } from './components/store-view/store-view.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'store-view',
        pathMatch: 'full'
    },
    {
        path: 'store-view',
        component: StoreViewComponent
    }
];
