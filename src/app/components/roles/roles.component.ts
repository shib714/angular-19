import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  imports: [CommonModule, FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  roles: any ;
  roleApiUrl: string =  "http://localhost:3000/roles";
  

  constructor(private http: HttpClient) {
    this.fetchRoles();
    
  }

fetchRoles() {
  this.roles = rxResource({
    loader: () => {
      return this.http.get<IRole>(this.roleApiUrl); //just return observer, no need to subscribe
    }
  })
}


}