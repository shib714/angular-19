import { Component, inject } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {


  clientObj: Client = new Client();

  clients: Client[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.getClients();

  }

  getClients() {
    this.clientService.fetchClients().subscribe(
      (results: Client[]) => {
        this.clients = results;
      });
  }

  onSaveClient() {
    debugger;
    this.clientService.addUpdateClient(this.clientObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Client created!!");
        this.getClients();
        this.clientObj = new Client();
      } else {
        alert(res.message);
      }
    });
  }

  onDeleteClient(id: number) {
    debugger;
    //local variable
    const isDelete = confirm("Are you sure to delete?")
    if (isDelete) {
      this.clientService.deleteClient(id).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert("Client deleted!!");
          this.getClients();
          this.clientObj = new Client();
        } else {
          alert(res.message);
        }
      });
    }
  }

  onEditClient(client: Client) {
    this.clientObj = client;
  }

}
