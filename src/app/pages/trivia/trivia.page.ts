import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TriviaService } from 'src/app/pages/trivia/trivia.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.page.html',
  styleUrls: ['./trivia.page.scss'],
})
export class TriviaPage implements OnInit {
  pseudo: string = '';
  difficulty: string = ""
  sauvegarder: boolean = false;
  questions = [];
  currentQuestion: any;
  numeroQuestion = 0;
  points: number = 0;
  beginGame: boolean = false;
  nextQuestion: boolean = false;
  endGame: boolean = false;
  infoView: boolean = true;
  disabledQuestion: boolean = false;
  title: string = '';
  info: string = '';
  url: string = '';
  constructor(
    private toastCtrl: ToastController,
    private triviaService: TriviaService,
    private router: Router
  ) {
    this.difficulty = localStorage.getItem('difficulty') || 'easy';
    this.loadQuestions();
  }

  ngOnInit() {
  }

  loadQuestions() {
    this.triviaService.getQuestionsA(this.difficulty).subscribe(resp => {
      console.log(resp);
      this.title = resp.title;
      this.info = resp.info;
      this.url = resp.mediaUrlSrc;
      this.questions = resp.results;
      console.log(this.questions);
      this.getCurrentQuestion();
      
    });

  }

  getCurrentQuestion() {
    this.currentQuestion = this.questions[this.numeroQuestion];
    this.currentQuestion.answers = [];
    this.currentQuestion.answers.push(this.currentQuestion.correct_answer);
    for (let answer of this.currentQuestion.incorrect_answers) {
      this.currentQuestion.answers.push(answer);
    }
    this.currentQuestion.answers = this.shuffleArray(this.currentQuestion.answers);
    console.log(this.currentQuestion);
    
  }

  shuffleArray(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }


  checkanswer(answer: string) {
    this.disabledQuestion = true;
    this.nextQuestion = true;
    if (answer === this.currentQuestion.correct_answer) {
      this.points++;
      console.log(this.points);
    }
    if (this.numeroQuestion >= this.questions.length - 1) {
      this.endGame = true;
    }
  }

  goToNextQuestion() {
    this.disabledQuestion = false;
    this.numeroQuestion++;
    this.nextQuestion = false;
    this.getCurrentQuestion();
  }

  goToScore() {
    localStorage.setItem('points', this.points.toString());
    this.router.navigate(['/results']);
  }

  changeViewStatus(event: boolean) {
    this.infoView = event;
  }

  calcProgress() {
    return (this.numeroQuestion + 1) / this.questions.length;
  }
}
