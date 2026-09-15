import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BusinessCardsPage } from './pages/business-cards/business-cards';
import { PostcardsPrintAdvertising } from './pages/postcards-print-advertising/postcards-print-advertising';
import { SignsBannersPosters } from './pages/signs-banners-posters/signs-banners-posters';
import { LabelsStickers } from './pages/labels-stickers/labels-stickers';
import { ClothingBags } from './pages/clothing-bags/clothing-bags';
import { PromotionalProducts } from './pages/promotional-products/promotional-products';
import { Packaging } from './pages/packaging/packaging';
import { InvitationsGiftsStationery } from './pages/invitations-gifts-stationery/invitations-gifts-stationery';
import { Wedding } from './pages/wedding/wedding';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'business-cards', component: BusinessCardsPage },
  { path: 'postcards-print-advertising', component: PostcardsPrintAdvertising },
  { path: 'signs-banners-posters', component: SignsBannersPosters },
  { path: 'labels-stickers', component: LabelsStickers },
  { path: 'clothing-bags', component: ClothingBags },
  { path: 'promotional-products', component: PromotionalProducts },
  { path: 'packaging', component: Packaging },
  { path: 'invitations-gifts-stationery', component: InvitationsGiftsStationery },
  { path: 'wedding', component: Wedding },
];
