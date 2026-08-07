import { Component, signal } from '@angular/core';
import { TaskCreationComponent } from '../../components/taskCreation.component';
import { ModalFormComponent } from '../../components/modalForm.component';
import { TaskCardComponent } from '../../components/taskCard.component';
import { Task, TaskStatus } from '../../models/task.model';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [TaskCreationComponent, ModalFormComponent, TaskCardComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  protected readonly title = signal('TodoList');

  readonly tasks = signal<Task[]>([]);

  onTaskCreated(newTask: Task): void {
    this.tasks.update((currentTasks) => [...currentTasks, newTask]);
  }

  onStatusChange(taskId: string, newStatus: TaskStatus): void {
    this.tasks.update((currentTasks) =>
      currentTasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)),
    );
  }

  onDeleteTask(taskId: string): void {
    this.tasks.update((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  }
}
