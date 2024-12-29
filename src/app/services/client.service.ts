import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/class/client';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientUrl: string ="/clients";   
  constructor(private http: HttpClient) { }


      fetchClients() : Observable<Client[]>{
        return this.http.get<Client[]>(environment.BASE_URL + this.clientUrl);
      }

      addUpdateClient(obj: Client): Observable<APIResponseModel> {
        return this.http.post<APIResponseModel>(environment.BASE_URL + this.clientUrl, obj);
        
      }

      deleteClient(id: number): Observable<APIResponseModel> {
        return this.http.delete<APIResponseModel>(environment.BASE_URL + this.clientUrl + "/" + id);
      }
}
