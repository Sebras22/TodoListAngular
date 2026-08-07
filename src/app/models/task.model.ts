export type TaskStatus = 'todo' | 'in_progress' | 'done';

export interface CreateTaskData {
  title: string;
  description?: string;
  dueDate?: string | Date;
}

export interface CreateTaskResult {
  title: string;
  description: string;
  dueDate?: string | Date;
}

export interface Task {
  id: string;
  boardId: string;
  title: string;
  description?: string;
  status: TaskStatus;
  dueDate?: string | Date;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}
