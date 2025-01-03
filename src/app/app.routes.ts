import { Routes } from '@angular/router';
import { StoreViewComponent } from './components/store-view/store-view.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CheckoutViewComponent } from './components/checkout-view/checkout-view.component';
import { VehicleSelectionComponent } from './components/vehicle-selection/vehicle-selection.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'store-view',
        pathMatch: 'full'
    },
    {
        path: 'store-view',
        component: StoreViewComponent
    },
    {
        path: 'vehicle-selection',
        component: VehicleSelectionComponent
    },
    {
        path: "cart", 
        component: CartViewComponent
    },
 
    {
        path: "checkout", 
        component: CheckoutViewComponent
    },
];

