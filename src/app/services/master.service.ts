import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

    
    rolesResource: any;
    designationsResource: any;
    url2: string ="http://localhost:3000/roles";
    url1: string ="http://localhost:3000/designations";

    

  constructor( private http: HttpClient) {
    this.getDesignations();
    this.getRoles();
   }
   //using rxResource in angular 19
    getDesignations() {
      this.designationsResource = rxResource( {
        loader: () => {
          return this.http.get(this.url1); //just return observer, no need to subscribe
        }
      });
    }
    getRoles() {
      this.rolesResource = rxResource( {
        loader: () => {
          return this.http.get(this.url2); //just return observer, no need to subscribe
        }
      });
    }


}
