import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BusinessCardsPage } from './pages/business-cards/business-cards';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'business-cards', component: BusinessCardsPage },
];
