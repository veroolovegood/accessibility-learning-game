import { Menu } from '../model/menu.model';

export const menuData: { [key: string]: Menu } = {
  'main': {
    title: 'Kapitelübersicht',
    lessons: [
      {
        id: 'introduction',
        name: 'Einführung',
        icon: 'introduction',
        route: 'menu/introduction',
        unlockedByDefault: true,
        unlockedWhenCompletedLesson: []
      },
      {
        id: 'aid-compatibility',
        name: 'Hilfsmittelkompatibilität',
        icon: 'aid',
        route: 'menu/introduction',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction', 'not-unlockable']
      },
      {
        id: 'visual',
        name: 'Visuelle Barrieren',
        icon: 'visual',
        route: 'menu/visual',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction']
      },
      {
        id: 'audio',
        name: 'Auditive Barrieren',
        icon: 'audio',
        route: 'menu/introduction',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction', 'not-unlockable']
      },
      {
        id: 'motorical',
        name: 'Motorische Barrieren',
        icon: 'motoric',
        route: 'menu/introduction',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction', 'not-unlockable']
      },
      {
        id: 'cognitive',
        name: 'Kognitive Barrieren',
        icon: 'cognitive',
        route: 'menu/introduction',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction', 'not-unlockable']
      },
      {
        id: 'exercises',
        name: 'Übung',
        icon: 'cognitive',
        route: 'menu/introduction',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction', 'not-unlockable']
      },
    ]
  },
  'visual': {
    title: 'Visuelle Barrieren',
    lessons: [
      {
        id: 'introduction',
        name: 'Einführung',
        route: 'visual/introduction',
        unlockedByDefault: true,
        unlockedWhenCompletedLesson: []
      },
      {
        id: 'fontSize',
        name: 'Schriftgröße',
        route: 'visual/fontsize',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction']
      },
      {
        id: 'contrast',
        name: 'Kontrast',
        route: 'visual/contrast',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction']
      },
      {
        id: 'colorInfo',
        name: 'Farbe als Information',
        route: 'visual/colorInfo',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction', 'not-unlockable']
      },
      {
        id: 'skip',
        name: 'Skip-Link',
        route: 'visual/skip',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction', 'not-unlockable']
      },
      {
        id: 'finalQuiz',
        name: 'Abschlussaufgabe',
        route: 'quiz/visual',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction', 'contrast', 'fontSize']
      }
    ]
  },
  'introduction': {
    title: 'Einführung',
    lessons: [
      {
        id: 'lessonOne',
        name: 'Einführung',
        route: 'introduction/lesson-one',
        unlockedByDefault: true,
        unlockedWhenCompletedLesson: []
      },
      {
        id: 'simulation',
        name: 'Simulation',
        route: 'introduction/simulation',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['lessonOne']
      },
      {
        id: 'finalQuiz',
        name: 'Abschlussquiz',
        route: 'quiz/introduction',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['lessonOne', 'simulation']
      }
    ],
  }
};
