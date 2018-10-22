import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const navigationRoutes: Routes = [
    { path: 'homepage', component: HomepageComponent },
    { path: 'aboutus', component: AboutusComponent},
]