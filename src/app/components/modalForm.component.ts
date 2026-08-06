import { Component, inject } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CreateTaskResult } from '../models/task.model';

@Component({
  selector: 'app-modalForm',
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule],
  templateUrl: './modalForm.component.html',
  styleUrl: './modalForm.component.scss',
})
export class ModalFormComponent {
  private readonly dialogRef = inject(MatDialogRef<ModalFormComponent>);
  private readonly fb = inject(FormBuilder);

  readonly taskForm = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
  });

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const result: CreateTaskResult = this.taskForm.getRawValue();
      this.dialogRef.close(result);
    }
  }
}
