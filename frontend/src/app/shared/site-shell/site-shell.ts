import { Component } from '@angular/core';
import { TopUtilityBar } from '../top-utility-bar/top-utility-bar';
import { MainHeader } from '../main-header/main-header';
import { CategoryNavBar } from '../category-nav-bar/category-nav-bar';
import { PromoAnnouncementBar } from '../promo-announcement-bar/promo-announcement-bar';
import { SiteFooter } from '../site-footer/site-footer';
import { ChatButton } from '../chat-button/chat-button';

@Component({
  selector: 'app-site-shell',
  imports: [TopUtilityBar, MainHeader, CategoryNavBar, PromoAnnouncementBar, SiteFooter, ChatButton],
  templateUrl: './site-shell.html',
  styleUrl: './site-shell.scss',
})
export class SiteShell {}
