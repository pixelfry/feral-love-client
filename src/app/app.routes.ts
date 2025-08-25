import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { StoriesComponent } from './components/stories/stories.component';
import { StoriesDetailComponent } from './components/stories-detail/stories-detail.component';
import { AdoptComponent } from './components/adopt/adopt.component';
import { AdoptDetailComponent } from './components/adopt-detail/adopt-detail.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' }, // default path
  { path: 'about', component: AboutComponent, pathMatch: 'full' }, // about page path
  { path: 'contact', component: ContactComponent, pathMatch: 'full' }, // contact path
  { path: 'stories', component: StoriesComponent, pathMatch: 'full' }, // stories path
  { path: 'story', component: StoriesDetailComponent, pathMatch: 'full' }, // stories path
  { path: 'adoptions', component: AdoptComponent, pathMatch: 'full' }, // stories path
  { path: 'adopt', component: AdoptDetailComponent, pathMatch: 'full' } // stories path
];
