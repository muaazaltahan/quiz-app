import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Answer } from 'src/app/models/answer';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {

  @Input() answer: Answer;
  @Output() success = new EventEmitter<{status: boolean, id: number}>();

  isSolved = false;

  choose() {
    if(this.answer.isTrue){
      this.success.emit({status: true, id: this.answer.id});
    }
  }

}
