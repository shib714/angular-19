import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/class/client';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment.development';
import { Project } from '../model/class/project';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientUrl: string = environment.BASE_URL + Constant.API_METHOD.GET_CLIENTS; 
  projectUrl: string = environment.BASE_URL + Constant.API_METHOD.GET_PROJECTS; 
  constructor(private http: HttpClient) { }

      fetchClients() : Observable<Client[]>{        
        return this.http.get<Client[]>(this.clientUrl);
      }

      fetchProjects() : Observable<Project[]>{
        return this.http.get<Project[]>(this.projectUrl);
      }

      addUpdateClient(obj: Client): Observable<APIResponseModel> {
        return this.http.post<APIResponseModel>(this.clientUrl, obj);        
      }

      deleteClient(id: number): Observable<APIResponseModel> {
        return this.http.delete<APIResponseModel>(this.clientUrl + "/" + id);
      }

      
}
