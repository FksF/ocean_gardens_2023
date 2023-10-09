import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level-selection',
  templateUrl: './level-selection.page.html',
  styleUrls: ['./level-selection.page.scss'],
})
export class LevelSelectionPage implements OnInit {
  username: string = '';
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('username') || '';
    console.log(this.username);
  }

  selectDifficulty(difficulty: string) {
    localStorage.setItem('difficulty', difficulty);
    this.router.navigate(['/trivia']);
  }
}
