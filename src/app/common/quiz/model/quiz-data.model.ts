export interface QuizData {
  title: string;
  questions: QuestionElement[];

}

export interface QuestionElement {
  question: string;
  answerOptions: Answer[];
  pointsToBeAwarded: number;
}

export interface Answer {
  content: string;
  isCorrect: boolean;
}
