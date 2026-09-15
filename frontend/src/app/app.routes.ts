import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BusinessCardsPage } from './pages/business-cards/business-cards';
import { PostcardsPrintAdvertising } from './pages/postcards-print-advertising/postcards-print-advertising';
import { SignsBannersPosters } from './pages/signs-banners-posters/signs-banners-posters';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'business-cards', component: BusinessCardsPage },
  { path: 'postcards-print-advertising', component: PostcardsPrintAdvertising },
  { path: 'signs-banners-posters', component: SignsBannersPosters },
];
