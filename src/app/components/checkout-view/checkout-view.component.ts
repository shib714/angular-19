import { Component } from '@angular/core';
import { JumbtronComponent } from '../jumbtron/jumbtron.component';
import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout-view',
  imports: [JumbtronComponent, CheckoutFormComponent],
  templateUrl: './checkout-view.component.html',
  styleUrl: './checkout-view.component.css'
})
export class CheckoutViewComponent {
  
  constructor(private cartService: CartService) {

  }

}
