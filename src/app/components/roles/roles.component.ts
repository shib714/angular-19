import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';
import { IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  imports: [CommonModule, FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  roles: IRole[] = [];
  masterService = inject(MasterService);


  ngOnInit(): void {
    this.masterService.fetchRoles().subscribe(
      (results: IRole[]) => {
        this.roles = results;
      });
  }
}