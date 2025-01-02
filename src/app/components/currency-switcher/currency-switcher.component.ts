import { Component, inject, Signal } from '@angular/core';
import { Currency } from '../../model/currency';
import { CurrencyCodeService } from '../../services/currency-code.service';

@Component({
  selector: 'app-currency-switcher',
  imports: [],
  templateUrl: './currency-switcher.component.html',
  styleUrl: './currency-switcher.component.css'
})
export class CurrencySwitcherComponent {

  showItems: boolean = false;

  currencyService = inject(CurrencyCodeService);

  currency: Signal<Currency> = this.currencyService.getCurrency();

  changeCurrency(currency: Currency): void {
    this.showItems = false;
  }

}
