import { Component, inject, Input, input, output } from '@angular/core';
import { LicensePlate } from '../../model/interface/license-plate';
;
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Currency } from '../../model/currency';

@Component({
  selector: 'app-license-plate',
  imports: [CurrencyPipe],
  templateUrl: './license-plate.component.html',
  styleUrl: './license-plate.component.css'
})
export class LicensePlateComponent {

  //signal based component
  plate = input.required<LicensePlate>();
  buttonText = input<string>("");

  buttonClicked = output<LicensePlate>();
  //currencyInfo = input.required<CurrencyInfo>();

  currency = input.required<Currency>();

}
