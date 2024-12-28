import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { IUser } from '../../model/interface/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent  implements OnInit {

  users:IUser [] = [];
  usersResource: any;
  url: string ="http://localhost:3000/users";
  //http = inject(HttpClient);

  constructor(private http: HttpClient) {
    this.getUsers();
  }


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  //traditional http client
  // getUsers() {
  //   this.http.get(this.url).subscribe((res) => {
  //     this.users = res;
  //     console.log(this.users);
  //   })
  // }

  //using rxResource in angular 19
  getUsers() {
    this.usersResource = rxResource( {
      loader: () => {
        return this.http.get(this.url); //just return observer, no need to subscribe
      }
    });
  }

  //using resource
//     getUsers() {
//     this.usersResource = resource( {
//       loader: () => {
//         return fetch(this.url).then(res => res.json); 
//       }
//     });
//   }
 }
