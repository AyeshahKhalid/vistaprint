import { Component } from '@angular/core';
import { TopUtilityBarComponent } from '../top-utility-bar/top-utility-bar.component';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { CategoryNavBarComponent } from '../category-nav-bar/category-nav-bar.component';
import { PromoAnnouncementBarComponent } from '../promo-announcement-bar/promo-announcement-bar.component';
import { SiteFooterComponent } from '../site-footer/site-footer.component';
import { ChatButtonComponent } from '../chat-button/chat-button.component';

@Component({
  selector: 'app-site-shell',
  imports: [TopUtilityBarComponent, MainHeaderComponent, CategoryNavBarComponent, PromoAnnouncementBarComponent, SiteFooterComponent, ChatButtonComponent],
  templateUrl: './site-shell.component.html',
  styleUrl: './site-shell.component.scss',
})
export class SiteShellComponent {}
