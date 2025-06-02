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
        unlockedWhenCompletedLesson: ['introduction']
      },
      {
        id: 'visual',
        name: 'Visuelle Barrieren',
        icon: 'visual',
        route: 'menu/introduction',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction']
      },
      {
        id: 'audio',
        name: 'Auditive Barrieren',
        icon: 'audio',
        route: 'menu/introduction',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction']
      },
      {
        id: 'motorical',
        name: 'Motorische Barrieren',
        icon: 'motoric',
        route: 'menu/introduction',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction']
      },
      {
        id: 'cognitive',
        name: 'Kognitive Barrieren',
        icon: 'cognitive',
        route: 'menu/introduction',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction']
      },
      {
        id: 'exercises',
        name: 'Übung',
        icon: 'cognitive',
        route: 'menu/introduction',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction']
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
        id: 'fontsize',
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
        unlockedWhenCompletedLesson: ['introduction']
      },
      {
        id: 'skip',
        name: 'Skip-Link',
        route: 'visual/skip',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction']
      },
      {
        id: 'exam',
        name: 'Abschlussaufgabe',
        route: 'visual/exam',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction', 'skip', 'colorInfo', 'contrast', 'fontsize']
      }
    ]
  },
  'introduction': {
    title: 'Einführung',
    lessons: [
      {
        id: 'introduction',
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
        unlockedWhenCompletedLesson: ['introduction']
      },
      {
        id: 'quiz',
        name: 'Abschlussquiz',
        route: 'quiz/introduction',
        unlockedByDefault: false,
        unlockedWhenCompletedLesson: ['introduction', 'simulation']
      }
    ],
  }
};
