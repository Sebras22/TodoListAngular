import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Board } from '../models/board.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  readonly boards = signal<Board[]>([]);

  createBoard(boardData: Partial<Board>): Observable<Board> {
    const newBoard: Board = {
      id: crypto.randomUUID(),
      name: boardData.name ?? 'Sans nom',
    };

    return of(newBoard).pipe(
      delay(300),
      tap((createdBoard) => {
        this.boards.update((current) => [...current, createdBoard]);
      }),
    );
  }

  deleteBoard(boardId: string): void {
    this.boards.update((current) => current.filter((b) => b.id !== boardId));
  }

  getBoardById(id: string): Board | undefined {
    return this.boards().find((b) => b.id === id);
  }
}
