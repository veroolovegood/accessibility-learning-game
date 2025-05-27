export interface QuizData {
  title: string;
  questions: QuestionElement[];
  rateNeeded: number;
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
