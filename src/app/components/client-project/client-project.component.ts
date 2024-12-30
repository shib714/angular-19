import { Component, inject, resource, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Client } from '../../model/class/client';
import { ClientService } from '../../services/client.service';
import { Project } from '../../model/class/project';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, DatePipe, CurrencyPipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})

//using Reactive Form
export class ClientProjectComponent {

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl(""),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPersion: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetail: new FormControl(""),
    projectCcontactPersonEmailId: new FormControl(""),
    clientId: new FormControl("")
  });

  clients: Client[] = [];

  projects: Project[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.getClients();
    this.getProjects();
  }
  getProjects() {
    this.clientService.fetchProjects().subscribe(
      (results: Project[]) => {
        this.projects = results;
      });
  }


  getClients() {
    this.clientService.fetchClients().subscribe(
      (results: Client[]) => {
        this.clients = results;
      });
  }



}



