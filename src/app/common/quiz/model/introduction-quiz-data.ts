import { QuizData } from './quiz-data.model';

export const introductionQuizData: QuizData = {
  title: "Abschlussquiz: Grundlagen der Barrierefreiheit",
  questions: [
    {
      question: 'Was bedeutet digitale Barrierefreiheit?',
      pointsToBeAwarded: 1,
      answerOptions: [
        {
          content: 'Die Gestaltung von digitalen Inhalten und Technologien so, dass sie für alle Menschen nutzbar sind, unabhängig von Einschränkungen',
          isCorrect: true
        },
        {
          content: 'Die Gestaltung von digitalen Inhalten ausschließlich für Menschen mit Behinderungen',
          isCorrect: false
        },
        {
          content: 'Die Einschränkung von Zugänglichkeit für bestimmte Benutzergruppen',
          isCorrect: false
        },
        {
          content: 'Die Anpassung von Websites nur für blinde Personen',
          isCorrect: false
        },
      ]
    },
    {question: 'Welche der folgenden Antwortmöglichkeiten sind Beispiele für digitale Barrieren?',
      answerOptions: [
        {
          content: 'Fehlende Alternativtexte für Bilder',
          isCorrect: true
        },
        {
          content: 'Videos ohne Untertitel',
          isCorrect: true
        },
        {
          content: 'Websites mit unzureichendem Farbkontrast',
          isCorrect: true
        },
        {
          content: 'Eine schnelle Internetverbindung',
          isCorrect: false
        },
      ],
      pointsToBeAwarded: 1},
    {question: 'Welche der folgenden Technologien helfen Menschen mit Behinderungen, das Internet zu nutzen?',
      answerOptions: [
        {
          content: 'Screenreader für blinde Personen',
          isCorrect: true
        },
        {
          content: 'Spracherkennungssysteme für Menschen mit motorischen Einschränkungen',
          isCorrect: true
        },
        {
          content: 'Farbfilter für Menschen mit Farbenblindheit',
          isCorrect: true
        },
        {
          content: 'Popup-Werbung für bessere Sichtbarkeit',
          isCorrect: false
        },
      ],
      pointsToBeAwarded: 1},
    {question: 'Welche der folgenden Aussagen trifft in Bezug auf digitale Barrierefreiheit zu?',
      answerOptions: [
        {
          content: 'Sie ermöglicht allen Menschen, unabhängig von Einschränkungen, den Zugang zu Informationen und Diensten.',
          isCorrect: true
        },
        {
          content: 'Sie verbessert die Nutzerfreundlichkeit für alle, nicht nur für Menschen mit Behinderungen.',
          isCorrect: true
        },
        {
          content: 'Sie sorgt dafür, dass nur Menschen mit Behinderungen spezielle Versionen von Webseiten nutzen können.',
          isCorrect: false
        },
        {
          content: 'Sie ist nur für staatliche Webseiten relevant und betrifft private Unternehmen nicht.',
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
          content: 'Motorische Barrieren (z. B. eingeschränkte Maus- oder Tastaturnutzung)',
          isCorrect: true
        },
        {
          content: 'Kognitive Barrieren (z. B. Lern- oder Konzentrationsschwierigkeiten)',
          isCorrect: true
        },
        {
          content: 'Finanzielle Barrieren (z. B. teure Computer)',
          isCorrect: false
        },
      ],
      pointsToBeAwarded: 1},
    {question: 'Welche einfache Maßnahme kann eine Webseite barrierefreier machen?',
      answerOptions: [
        {
          content: 'Klare und verständliche Sprache verwenden',
          isCorrect: true
        },
        {
          content: 'Inhalte nur als Bilder ohne Text bereitstellen',
          isCorrect: false
        },
        {
          content: 'Nur eine Maussteuerung ohne Tastaturunterstützung ermöglichen',
          isCorrect: false
        },
        {
          content: 'Untertitel und Alternativtexte für Medien hinzufügen',
          isCorrect: true
        },
      ],
      pointsToBeAwarded: 1},
  ]
}
