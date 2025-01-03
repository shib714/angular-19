import { Component, inject, Input, input, output } from '@angular/core';
import { LicensePlate } from '../../model/interface/license-plate';
;
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { CurrencyInfo } from '../../services/currency.service';

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
  //currency = input.required<Currency>();

  //TODD:  handle exchange rates for each currency using endpoint https://lp-store-server.vercel.app/rates
  currencyInfo = input.required<CurrencyInfo>();

  buttonClicked = output<LicensePlate>();

}

