import { Component, computed, inject, input, signal } from '@angular/core';
import { TaskCreationComponent } from '../../components/taskCreation.component';
import { ModalFormComponent } from '../../components/modalForm.component';
import { TaskCardComponent } from '../../components/taskCard.component';
import { Task, TaskStatus } from '../../models/task.model';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [TaskCreationComponent, ModalFormComponent, TaskCardComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  private readonly boardService = inject(BoardService);

  readonly id = input<string>();

  readonly currentBoard = computed(() => {
    const boardId = this.id();
    return boardId ? this.boardService.getBoardById(boardId) : undefined;
  });

  readonly tasks = signal<Task[]>([]);

  readonly filteredTasks = computed(() => {
    const currentBoardId = this.id();
    if (!currentBoardId) return [];
    return this.tasks().filter((task) => task.boardId === currentBoardId);
  });

  onTaskCreated(newTask: Task): void {
    const currentBoardId = this.id();
    if (!currentBoardId) return;

    const taskWithBoardId: Task = { ...newTask, boardId: currentBoardId };

    this.tasks.update((currentTasks) => [...currentTasks, taskWithBoardId]);
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
