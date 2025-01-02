import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LicensePlate } from '../model/interface/license-plate';

@Injectable({
  providedIn: 'root'
})
export class PlateServiceService {

  url: string = 'https://lp-store-server.vercel.app/data';

  constructor(private http: HttpClient) {
  }

  fetchPlates() {
    return this.http.get<LicensePlate[]>(this.url);
  }
}
