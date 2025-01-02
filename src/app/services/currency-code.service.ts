import { Injectable, signal, Signal } from '@angular/core';
import { Currency } from '../model/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyCodeService {

  private readonly currency = signal<Currency>("USD");

//alternative to getter
//currencySignal = this.currency.asReadonly();
  constructor() { }

  getCurrency(): Signal<Currency> {
    return this.currency.asReadonly();
  }
}
