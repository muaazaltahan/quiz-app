import { Component, Input } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  grades: any[] = [];

  @Input() question: Question;

  getGrade(status: boolean, id: number) {
    this.grades.push(id,status);
  }

}
