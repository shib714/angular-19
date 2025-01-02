import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jumbtron',
  imports: [],
  templateUrl: './jumbtron.component.html',
  styleUrl: './jumbtron.component.css'
})
export class JumbtronComponent {
  
  @Input() title!: string;
  @Input() description!: string;

}
