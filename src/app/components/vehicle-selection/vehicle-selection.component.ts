import { Component, inject } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { JumbtronComponent } from '../jumbtron/jumbtron.component';

@Component({
  selector: 'app-vehicle-selection',
  imports: [FormsModule, JumbtronComponent],
  templateUrl: './vehicle-selection.component.html',    
  styles: ``
})
export class VehicleSelectionComponent {

  private vehicleService = inject(VehicleService);

  vehicles = this.vehicleService.vehicles;
  selectedVehicle = this.vehicleService.selectedVehicle;
  quantity = this.vehicleService.quantaty;
  total = this.vehicleService.total;
  color = this.vehicleService.color;
}