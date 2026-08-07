import { Routes } from '@angular/router';
import { BodyComponent } from './components/layout/body.component';

export const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'board/:id', component: BodyComponent },
  { path: '**', redirectTo: '' },
];
