import { Routes } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { GroupCardsComponent } from './components/group-cards/group-cards.component';

export const routes: Routes = [
  { path: '', component: GroupCardsComponent },
  { path: 'aboutme', component: AboutmeComponent },
];
