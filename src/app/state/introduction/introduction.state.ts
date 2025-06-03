import { CompletedStateEnum } from '../completed-state.enum';

export interface IntroductionState{
  lessonOne: CompletedStateEnum;
  quizLessonOne: CompletedStateEnum;
  simulation: CompletedStateEnum;
  finalQuiz: CompletedStateEnum;
}
