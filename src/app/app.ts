import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header.component';
import { TaskCreationComponent } from './components/taskCreation.component';
import { ModalFormComponent } from './components/modalForm.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TaskCreationComponent, ModalFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('TodoList');
}
