import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TvListComponent } from './component/tv-list/tv-list.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TvListComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-proj';
}
