import { Component, inject, OnInit, resource } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';
import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';
import { IDesignation } from '../../model/interface/role';


@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent {

  designations: any;
  designationApiUrl: string = "http://localhost:3000/designations";


  constructor(private http: HttpClient) {
    this.fetchDesignations();

  }

  fetchDesignations() {
    this.designations = rxResource({
      loader: () => {
        return this.http.get<IDesignation>(this.designationApiUrl); //just return observer, no need to subscribe
      }
    })
  }
}

