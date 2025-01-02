import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { LicensePlateComponent } from '../license-plate/license-plate.component';
import { LicensePlate } from '../../model/interface/license-plate';
import { CurrencyService } from '../../services/currency.service';
import { JumbtronComponent } from '../jumbtron/jumbtron.component';

@Component({
  selector: 'app-store-view',
  imports: [LicensePlateComponent, JumbtronComponent, AsyncPipe],
  templateUrl: './store-view.component.html',
  styleUrl: './store-view.component.css'
})
export class StoreViewComponent {

  http = inject(HttpClient);
  plates$ = this.http.get<LicensePlate[]>('https://lp-store-server.vercel.app/data');
 
  //currency = inject(CurrencyService).getCurrency();

  currencyInfo = inject(CurrencyService).getCurrencyInfo();
  

}
