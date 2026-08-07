import { Component, inject } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { Board } from '../../models/board.model';
import { BoardComponent } from '../board.component';
import { BoardCreationComponent } from '../boardCreation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BoardComponent, BoardCreationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly boardService = inject(BoardService);

  readonly boards = this.boardService.boards;

  onBoardCreated(boardData: Board): void {
    this.boardService.createBoard(boardData).subscribe();
  }

  onDeleteBoard(boardId: string): void {
    this.boardService.deleteBoard(boardId);
  }
}
