import { Component, inject, Input, input, output } from '@angular/core';
import { LicensePlate } from '../../model/interface/license-plate';
import { PlateServiceService } from '../../services/plate-service.service';
import { CurrencyInfo, CurrencyService } from '../../services/currency.service';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-license-plate',
  imports: [],
  templateUrl: './license-plate.component.html',
  styleUrl: './license-plate.component.css'
})
export class LicensePlateComponent {

  plate = input.required<LicensePlate>();
  buttonText = input<string>("");
  buttonClicked = output<LicensePlate>();
  currencyInfo = input.required<CurrencyInfo>();


}
