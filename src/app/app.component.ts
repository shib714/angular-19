import { Component, resource } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-19';

    //exploring angular 19 resource api
    public search = new FormControl<string | null>(null);
    //public searchRequest = toSignal(this.search.valueChanges);
    public searchRequest = toSignal(this.search.valueChanges);

    public todos = resource({
      request: () => this.searchRequest(),
      loader: async ({ request, abortSignal }) => {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos?q=' + request,
          {
            signal: abortSignal,
          },
        );
  
        return await response.json();
      },
    });
}


