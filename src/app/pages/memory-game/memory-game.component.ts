import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'ma-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrl: './memory-game.component.scss',
})
export class MemoryGameComponent implements OnInit {
  moves: number = 0;
  time: number = 0;

  timeInterval: any;

  difficulty: 'easy' | 'medium' | 'hard' = 'medium';
  gameCounter: number = 1;

  ngOnInit() {
    this.initGame();
  }

  restart() {
    Swal.fire({
      title: '',
      text: 'Do you want to restart?',
      icon: 'warning',
      confirmButtonText: 'Restart',
      showCancelButton: true,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        this.initGame();
      }
    });
  }

  newGame() {
    Swal.fire({
      title: '',
      text: 'Please choose difficulty',
      confirmButtonText: 'Start Game',
      allowOutsideClick: false,
      input: 'radio',
      inputOptions: { easy: 'Easy', medium: 'Medium', hard: 'Hard' },
      inputValidator: (value: string) => {
        if (!value) {
          return 'You need to choose something!';
        }
        this.difficulty = value as 'easy' | 'medium' | 'hard';

        return null;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.initGame();
      }
    });
  }

  onGameFinish() {
    setTimeout(() => {
      Swal.fire({
        title: 'Congrats!',
        text:
          ' Finished in ' + this.moves + ' moves and ' + this.time + ' seconds',
        icon: 'success',
        confirmButtonText: 'Ok',
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          this.initGame();
        }
      });
      this.initGame();
    }, 500);
  }

  private initGame() {
    this.moves = 0;
    this.time = 0;
    this.gameCounter++;

    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }

    this.timeInterval = setInterval(() => {
      this.time++;
    }, 1000);
  }
}
