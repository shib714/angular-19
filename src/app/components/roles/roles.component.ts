import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { rxResource } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [CommonModule, FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent  {
[x: string]: any;

  url: string = "http://localhost:3000/roles";

  roles: IRole[] = [];

  rolesResource:any;

  //http = inject(HttpClient);

  
   constructor(private http: HttpClient) {
    this.getAllRoles();
    }


  ngOnInit(): void {
    //this.getAllRoles();
  }

  // getAllRoles() {
  //   this.http.get(this.url).subscribe((res:IRole) => {
  //     this.rolesList = res.data;
  //   });


  //using rxResource
  getAllRoles() {
    rxResource({
      loader: () => {
        return this.http.get(this.url);
      }
    });

  }


















  //data types -> string, number, boolean, date, object, array, null, undefined

  //  firstName:string ='Angular 19';
  //  version: number= 19;

  //  isActive:boolean = false;

  //  currentDate: Date = new Date();

  //  selectedState: string ='';

  //  showWelcomeMessage() : void{
  //   alert("Welcome to the Angular 19 Tutorial");
  //  }

  //  showWelcomeWithParameter(msg: string) {
  //   alert(msg);
  //  }



}
