import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LicensePlate } from '../model/interface/license-plate';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartContents() : Observable<LicensePlate[]> {
    return this.http.get<LicensePlate[]>('http://localhost:3000/cart');
  }

  addToCart(plate: LicensePlate): Observable<unknown> {
    return this.http.put('http://localhost:3000/cart/' + plate._id, null);
  }

  removeFromCart(plate: LicensePlate): Observable<unknown> {
    return this.http.delete('http://localhost:3000/cart/' + plate._id);
  }
}
