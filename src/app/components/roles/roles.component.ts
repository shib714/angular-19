import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
 //data types -> string, number, boolean, date, object, array, null, undefined

 firstName:string ='Angular 19';
 version: number= 19;
 
 isActive:boolean = false;

 currentDate: Date = new Date();

 selectedState: string ='';

 showWelcomeMessage() : void{
  alert("Welcome to the Angular 19 Tutorial");
 }

 showWelcomeWithParameter(msg: string) {
  alert(msg);
 }
}
