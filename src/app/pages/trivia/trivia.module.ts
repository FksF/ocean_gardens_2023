import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TriviaPageRoutingModule } from './trivia-routing.module';

import { TriviaPage } from './trivia.page';
import { TriviaInfoComponent } from './components/trivia-info/trivia-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TriviaPageRoutingModule
  ],
  declarations: [
    TriviaPage,
    TriviaInfoComponent
  ]
})
export class TriviaPageModule {}
