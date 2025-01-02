import { Component, inject, Signal } from '@angular/core';
import { Currency } from '../../model/currency';
import { CurrencyCodeService } from '../../services/currency-code.service';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-currency-switcher',
  imports: [],
  templateUrl: './currency-switcher.component.html',
  styleUrl: './currency-switcher.component.css'
})
export class CurrencySwitcherComponent {

  showItems: boolean = false;

  //currencyCodeService = inject(CurrencyCodeService);

  currencyService = inject(CurrencyService);

  currency: Signal<Currency> = this.currencyService.getCurrency();

  //currencyCode: Signal<Currency> = this.currencyCodeService.getCurrency();

  changeCurrency(currency: Currency): void {
    this.currencyService.setCurrency(currency);
    this.showItems = false;
  }

}
