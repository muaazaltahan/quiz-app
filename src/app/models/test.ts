import { Question } from "./question";

export class Test {
  id: number;
  title: string;
  level: 'easy'|'normal'|'difficult';
  questions: Question[];
}
