import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, linkedSignal, signal } from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
//Author: Deborah Kurata at  https://www.youtube.com/watch?v=fEIDfm7oHtM
export class VehicleService {
  private vehicleUrl = 'https://swapi.py4e.com/api/vehicles';

  private http = inject(HttpClient);

//data that are required in our UI 
//vehicles = signal<Vehicle[]>([]); //a writable signal
selectedVehicle = signal<Vehicle | undefined> (undefined);
//quantaty = signal(1);
quantaty = linkedSignal ({
  source: this.selectedVehicle,
  computation: (vehi) => {
    if(vehi) {
      return 1;
    }
    return 0;
  }
});

total = computed(() => (this.selectedVehicle()?.cost_in_credits ?? 0 ) * this.quantaty()); //readonly signal
color = computed(() => this.total() > 50000 ? 'green' : 'blue');

vehicleResource = rxResource({
  loader: () => this.http.get<VehicleResponse>(this.vehicleUrl).pipe(
    map(vr => vr.results)
  )
});
vehicles = computed(() => this.vehicleResource.value() ?? [] as Vehicle[]);

}

export interface VehicleResponse {
  count: number;
  next: string;
  previous: string;
  results: [];
}

export interface Vehicle {
  name: string;
  cost_in_credits: number;
}

