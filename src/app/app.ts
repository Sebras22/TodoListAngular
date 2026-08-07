import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header.component';
import { BodyComponent } from './components/layout/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BodyComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
