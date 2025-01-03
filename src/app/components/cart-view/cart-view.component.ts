import { Component, inject } from '@angular/core';
import { LicensePlate } from '../../model/interface/license-plate';
import {NgFor, NgIf} from '@angular/common';
import { CartService } from '../../services/cart.service';
import { JumbtronComponent } from '../jumbtron/jumbtron.component';
import { LicensePlateComponent } from '../license-plate/license-plate.component';
import { CurrencyService } from '../../services/currency.service';


@Component({
  selector: 'app-cart-view',
  imports: [NgFor, NgIf, LicensePlateComponent, JumbtronComponent],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent {

  cartContents: LicensePlate[] = [];

   currencyInfo = inject(CurrencyService).getCurrencyInfo();

  constructor(private service: CartService) {
    service.getCartContents().subscribe(data => this.cartContents = data);    
  }

  removeFromCart(plate: LicensePlate): void {
    // TODO
  }

}
