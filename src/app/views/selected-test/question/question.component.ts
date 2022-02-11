import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  isSolved: boolean = false;
  @Input() question: Question;
  @Output() grade = new EventEmitter<number>();

  chooseAnswer(a: Answer) {
    if(a.isTrue) {
      this.grade.emit(this.question.grade);
    } else {
      this.grade.emit(0);
    }
  }

}
