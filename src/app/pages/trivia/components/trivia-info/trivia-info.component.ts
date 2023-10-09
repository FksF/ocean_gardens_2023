import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-trivia-info',
  templateUrl: './trivia-info.component.html',
  styleUrls: ['./trivia-info.component.scss'],
})
export class TriviaInfoComponent  implements OnInit {

  @Input() title: string = '';
  @Input() info: string = '';
  @Input() url: string = '';
  @Output() questionsView = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {}

  goToQuestions() {
    this.questionsView.emit(false);
  }
}
