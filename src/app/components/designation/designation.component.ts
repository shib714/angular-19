import { Component, DestroyRef, inject, OnInit, resource } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';
import { IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent {

  isLoading: boolean = true;

  designations: IDesignation[] = [];
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.getDesignations();
    
  }

  getDesignations() {
    this.masterService.fetchDesignations().subscribe(
      (results: IDesignation[]) => {
        this.designations = results;        
      });
      this.isLoading = false;
  }
}








// designations: any;
// designationApiUrl: string ="http://localhost:3000/designations";


// constructor(private http: HttpClient) {
//   this.fetchDesignations();

// }

// fetchDesignations() {
//   this.designations = rxResource({
//     loader: () => {
//       return this.http.get<IDesignation>(this.designationApiUrl); //just return observer, no need to subscribe
//     }
//   })
// }


