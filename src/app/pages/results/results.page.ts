import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  points: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.points = localStorage.getItem('points') || '';
  }

  goToUser() {
    this.router.navigate(['/user']);
  }
}
