import { Component, inject } from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CreateTaskResult } from '../models/task.model';

export type ModalType = 'task' | 'board';

export interface ModalDialogData {
  type: ModalType;
}

export interface CreateBoardResult {
  name: string;
}

export type ModalFormResult = CreateTaskResult | CreateBoardResult;

@Component({
  selector: 'app-modalForm',
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule],
  templateUrl: './modalForm.component.html',
  styleUrl: './modalForm.component.scss',
})
export class ModalFormComponent {
  private readonly dialogRef = inject(MatDialogRef<ModalFormComponent, ModalFormResult>);
  private readonly fb = inject(FormBuilder);
  readonly data: ModalDialogData = inject(MAT_DIALOG_DATA);

  readonly isBoard = this.data?.type === 'board';

  readonly form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: [''],
  });

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.valid) {
      const rawValue = this.form.getRawValue();

      if (this.isBoard) {
        const result: CreateBoardResult = { name: rawValue.title };
        this.dialogRef.close(result);
      } else {
        const result: CreateTaskResult = rawValue;
        this.dialogRef.close(result);
      }
    }
  }
}
