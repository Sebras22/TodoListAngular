import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CreateTaskResult, Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  createTask(taskData: CreateTaskResult): Observable<Task> {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: taskData.title,
      description: taskData.description,
      status: 'todo',
      dueDate: taskData.dueDate,
      createdAt: new Date(),
    };

    return of(newTask).pipe(delay(300));
  }
}
