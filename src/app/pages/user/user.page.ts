import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  username: string = '';
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    localStorage.clear();
  }

  saveUsername() {
    console.log(this.username);
    localStorage.setItem('username', this.username);
    this.router.navigate(['/level-selection']);
  }

}
