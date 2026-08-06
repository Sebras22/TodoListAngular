import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalFormComponent } from './modalForm.component';
import { CreateTaskResult } from '../models/task.model';

@Component({
  selector: 'app-taskCreation',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './taskCreation.component.html',
  styleUrl: './taskCreation.component.scss',
})
export class TaskCreationComponent {
  private readonly dialog = inject(MatDialog);

  openCreateTaskModal(): void {
    const dialogRef = this.dialog.open<ModalFormComponent, any, CreateTaskResult>(
      ModalFormComponent,
      {
        width: '480px',
        disableClose: false,
      },
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.handleTaskCreated(result);
      }
    });
  }

  private handleTaskCreated(task: CreateTaskResult): void {
    console.log('Nouvelle tâche créée :', task);
    // Appeler votre service Angular ici (ex: this.taskService.create(task))
  }
}
