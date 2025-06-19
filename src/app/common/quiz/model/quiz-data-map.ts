import { QuizData } from './quiz-data.model';
import { introductionQuizData } from './introduction-quiz-data';
import { visualQuizData } from './visual-quiz.data';

export const quizDataMap: {[key: string]: QuizData} = {
  'introduction': introductionQuizData,
  'visual': visualQuizData
}
