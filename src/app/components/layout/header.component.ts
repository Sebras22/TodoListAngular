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

  githubUrl = 'https://github.com/Sebras22/TodoListAngular';

  copyGithubLink(): void {
    navigator.clipboard
      .writeText(this.githubUrl)
      .then(() => {
        console.log('Lien GitHub copié !');
      })
      .catch((err) => {
        console.error('Erreur lors de la copie : ', err);
      });
  }
  goToGithub(): void {
    window.open(this.githubUrl, '_blank', 'noopener,noreferrer');
  }
}
