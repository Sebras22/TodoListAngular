import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalFormComponent } from './modalForm.component';
import { Board } from '../models/board.model';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-board-creation',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './boardCreation.component.html',
  styleUrl: './boardCreation.component.scss',
})
export class BoardCreationComponent {
  private readonly dialog = inject(MatDialog);
  private readonly boardService = inject(BoardService);

  openCreateBoardModal(event: Event): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open<ModalFormComponent, any, Board>(ModalFormComponent, {
      width: '480px',
      data: { type: 'board' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.handleBoardCreated(result);
      }
    });
  }

  private handleBoardCreated(boardData: Board): void {
    this.boardService.createBoard(boardData).subscribe({
      next: (newBoard: Board) => {
        console.log('Tableau ajouté avec succès !', newBoard);
      },
      error: (err) => {
        console.error('Erreur lors de la création du tableau :', err);
      },
    });
  }
}
