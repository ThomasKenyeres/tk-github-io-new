import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShowcaseHomeComponent } from './pages/showcase/showcase-home/showcase-home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'skills', component: ShowcaseHomeComponent},
    { path: 'showcase', component: ShowcaseHomeComponent}
];
