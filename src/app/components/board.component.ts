import { Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Board } from '../models/board.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  host: {
    '(click)': 'onBoardClick()',
  },
})
export class BoardComponent {
  private readonly router = inject(Router);
  readonly name = input.required<string>();
  readonly id = input.required<string>();

  readonly boardClick = output<void>();
  readonly delete = output<void>();

  onBoardClick(): void {
    console.log('Clic sur le tableau ID :', this.id());
    this.router.navigate(['/board', this.id()]);
  }

  onDelete(event: Event): void {
    event.stopPropagation();
    this.delete.emit();
  }
}
