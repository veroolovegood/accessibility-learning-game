export interface Lesson {
  id: string;
  name: string;
  icon?: string;
  route: string;
  unlockedByDefault: boolean;
  unlockedWhenCompletedLesson: string[];
}

export interface LessonStatusOfUser extends Lesson{
  completed: boolean;
}
