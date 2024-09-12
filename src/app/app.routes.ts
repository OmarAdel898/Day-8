import { Routes } from '@angular/router';
import { TvListComponent } from './component/tv-list/tv-list.component';
import { HomeComponent } from './component/home/home.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { TvDeteailsComponent } from './component/tv-deteails/tv-deteails.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tv', component: TvListComponent },
  {path:'**',component:PagenotfoundComponent},
  { path: 'tvdetails/:id', component: TvDeteailsComponent }
];
