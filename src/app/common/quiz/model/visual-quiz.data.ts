import { QuizData } from './quiz-data.model';

export const visualQuizData: QuizData = {
  title: "Abschlussquiz: Visuelle Barrieren",
  rateNeeded: 0.75,
  questions: [
    {
      question: 'Welche der folgenden Probleme könnten für Nutzer mit Weitsichtigkeit auf einer Webseite auftreten?',
      pointsToBeAwarded: 1,
      answerOptions: [
        {
          content: 'Schwierigkeiten beim Lesen von kleinen Texten',
          isCorrect: true
        },
        {
          content: 'Probleme beim Erkennen von Bildern oder Grafiken',
          isCorrect: true
        },
        {
          content: 'Schlechte Navigation aufgrund von kleinen Klickflächen',
          isCorrect: false
        },
        {
          content: 'Schwierigkeiten bei der Farbdifferenzierung',
          isCorrect: false
        },
      ]
    },
    {question: 'Welche der folgenden Probleme können für Nutzer mit Farbsehschwäche auftreten?  ',
      answerOptions: [
        {
          content: 'Unzureichender Kontrast zwischen Text und Hintergrund',
          isCorrect: true
        },
        {
          content: 'Schwierigkeit, wichtige Informationen zu erkennen, wenn diese durch Farben hervorgehoben werden',
          isCorrect: true
        },
        {
          content: 'Schwierigkeiten beim Identifizieren von Buttons und Links',
          isCorrect: false
        },
        {
          content: 'Texte und Bilder sind für sie schwer verständlich',
          isCorrect: false
        },
      ],
      pointsToBeAwarded: 1},
    {question: 'Welche Maßnahmen könnten helfen, das Problem für Nutzer mit Weitsichtigkeit zu lösen?',
      answerOptions: [
        {
          content: 'Nutzung von named Schriftgrößen',
          isCorrect: true
        },
        {
          content: 'Verwendung von Farbe als Information',
          isCorrect: false
        },
        {
          content: 'Nutzung von relativen Schriftgrößen wie % oder rem Werte',
          isCorrect: true
        },
        {
          content: 'Ausschalten von Animationen ermöglichen',
          isCorrect: false
        },
      ],
      pointsToBeAwarded: 1},
    {question: 'Welche Lösungen könnten helfen, die Barrieren für Nutzer mit Farbsehschwäche zu überwinden?',
      answerOptions: [
        {
          content: 'Kontrast erhöhen',
          isCorrect: true
        },
        {
          content: 'Farbe nicht als einzigen Informationsträger  verwenden',
          isCorrect: true
        },
        {
          content: ' Eine klare Navigationsstruktur',
          isCorrect: false
        },
        {
          content: 'Verwendung von Symbolen und Text zur Ergänzung von Farben',
          isCorrect: true
        },
      ],
      pointsToBeAwarded: 1},
  ]
}
