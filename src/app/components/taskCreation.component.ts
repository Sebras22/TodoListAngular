import { Component, inject, output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
// Importe les types créés dans le ModalFormComponent
import { ModalFormComponent, ModalDialogData } from './modalForm.component';
import { CreateTaskResult, Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-creation',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './taskCreation.component.html',
  styleUrl: './taskCreation.component.scss',
})
export class TaskCreationComponent {
  private readonly dialog = inject(MatDialog);
  private readonly taskService = inject(TaskService);

  readonly taskCreated = output<Task>();

  openCreateTaskModal(): void {
    const dialogRef = this.dialog.open<ModalFormComponent, ModalDialogData, CreateTaskResult>(
      ModalFormComponent,
      {
        width: '480px',
        data: { type: 'task' },
      },
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.handleTaskCreated(result);
      }
    });
  }

  private handleTaskCreated(taskData: CreateTaskResult): void {
    this.taskService.createTask(taskData).subscribe({
      next: (newTask: Task) => {
        this.taskCreated.emit(newTask);
        console.log('Tâche ajoutée avec succès !', newTask);
      },
      error: (err) => {
        console.error('Erreur lors de la création de la tâche :', err);
      },
    });
  }
}
