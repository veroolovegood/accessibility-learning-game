import { QuizData } from './quiz-data.model';

export const introductionQuizData: QuizData = {
  title: "Abschlussquiz: Grundlagen der Barrierefreiheit",
  rateNeeded: 0.8,
  questions: [
    {
      question: 'Was fällt unter den Begriff "digitale Barrierefreiheit"?',
      pointsToBeAwarded: 1,
      answerOptions: [
        {
          content: 'Die Gestaltung von digitalen Inhalten und Technologien so, dass sie für alle Menschen nutzbar sind, unabhängig von Einschränkungen',
          isCorrect: true
        },
        {
          content: 'Die technische Sicherstellung der Datenintegrität in digitalen Systemen.',
          isCorrect: false
        },
        {
          content: 'Die Erstellung digitaler Inhalte, die ausschließlich auf die Bedürfnisse von Menschen mit spezifischen Behinderungen zugeschnitten sind',
          isCorrect: false
        },
        {
          content: 'Die Bereitstellung von dedizierten Service-Hotlines und E-Mail-Support für Menschen mit Orientierungsschwierigkeiten im Internet.',
          isCorrect: false
        },
      ]
    },
    {question: 'Welche der folgenden Antwortmöglichkeiten sind Beispiele für digitale Barrieren?',
      answerOptions: [
        {
          content: 'Pop-ups auf Webseiten',
          isCorrect: false
        },
        {
          content: 'Fehlende Textbeschreibungen für Bilder',
          isCorrect: true
        },
        {
          content: 'Videos ohne Untertitel',
          isCorrect: true
        },
        {
          content: 'Websites mit geringem Farbkontrast zwischen Hintergrund und Text',
          isCorrect: true
        },
      ],
      pointsToBeAwarded: 1},
    {question: 'Welche der folgenden Technologien helfen Menschen mit Behinderungen, das Internet zu nutzen?',
      answerOptions: [
        {
          content: ' Text-zu-Sprache Tools',
          isCorrect: true
        },
        {
          content: 'Spracherkennungssysteme',
          isCorrect: true
        },
        {
          content: 'Popup-Benachrichtigungen',
          isCorrect: false
        },
        {
          content: 'Farbfilter',
          isCorrect: true
        },
      ],
      pointsToBeAwarded: 1},
    {question: 'Welche der folgenden Aussagen treffen in Bezug auf digitale Barrierefreiheit zu?',
      answerOptions: [
        {
          content: 'Sie ermöglicht allen Menschen, unabhängig von ihren Einschränkungen, den Zugang zu Informationen und Diensten',
          isCorrect: true
        },
        {
          content: 'Sie verbessert die Benutzererfahrung für alle Nutzer',
          isCorrect: true
        },
        {
          content: 'Sie schafft separate Webversionen extra für behinderte Nutzer',
          isCorrect: false
        },
        {
          content: 'Sie ist hauptsächlich für ältere Menschen gedacht, um ihnen die Nutzung neuer Technologien zu erleichtern',
          isCorrect: false
        },
      ],
      pointsToBeAwarded: 1},
    {question: 'Welche der folgenden sind Kategorien von Barrieren?',
      answerOptions: [
        {
          content: 'Visuelle Barrieren (z. B. Farbenblindheit, Sehschwäche)',
          isCorrect: true
        },
        {
          content: 'Finanzielle Barrieren (z. B. teure Computer)',
          isCorrect: false
        },
        {
          content: 'Motorische Barrieren (z. B. eingeschränkte Maus- oder Tastaturnutzung)',
          isCorrect: true
        },
        {
          content: 'Kognitive Barrieren (z. B. Lern- oder Konzentrationsschwierigkeiten)',
          isCorrect: true
        },
      ],
      pointsToBeAwarded: 1},
    {question: 'Welche einfachen Maßnahmen können die Usability im Sinne von digitaler Barrierefreiheit auf einer Website erhöhen?',
      answerOptions: [
        {
          content: 'Kurze Texte & einfache Sprache verwenden',
          isCorrect: true
        },
        {
          content: 'Hochauflösenden Bilder verwenden',
          isCorrect: false
        },
        {
          content: 'Navigation ausschließlich per Maus ermöglichen',
          isCorrect: false
        },
        {
          content: 'Untertitel und Alternativtexte für Medien einbinden',
          isCorrect: true
        },
      ],
      pointsToBeAwarded: 1},
  ]
}
