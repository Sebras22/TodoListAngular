import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskStatus } from '../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskCard.component.html',
  styleUrl: './taskCard.component.scss',
})
export class TaskCardComponent {
  readonly title = input.required<string>();
  readonly description = input<string>('');
  readonly status = input<TaskStatus>('todo');
  readonly dueDate = input<string | Date>();

  readonly cardClick = output<void>();
  readonly statusChange = output<TaskStatus>();
  readonly delete = output<void>();

  onCardClick(): void {
    this.cardClick.emit();
  }

  onStatusChange(event: Event): void {
    event.stopPropagation();
    const select = event.target as HTMLSelectElement;
    this.statusChange.emit(select.value as TaskStatus);
  }

  onDelete(event: Event): void {
    event.stopPropagation();
    this.delete.emit();
  }
}
