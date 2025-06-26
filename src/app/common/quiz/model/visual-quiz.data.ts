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
    {question: 'Welche der folgenden Probleme können für Nutzer mit Farbsehschwäche auftreten?',
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
          content: 'Texte und Bilder sind nicht wahrnehmbar ',
          isCorrect: false
        },
      ],
      pointsToBeAwarded: 1},
    {question: 'Welche Werte sollten für die Angabe von Schriftgrößen in CSS verwendet werden, um visuell eingeschränkten Personen die Wahrnehmung von Text zu erleichtern?',
      answerOptions: [
        {
          content: 'font-size: medium;',
          isCorrect: true
        },
        {
          content: 'font-size: 30px;',
          isCorrect: false
        },
        {
          content: ' font-size: 100%;',
          isCorrect: true
        },
        {
          content: 'font-size: 1em;',
          isCorrect: true
        },
      ],
      pointsToBeAwarded: 1},
    {question: 'Welche Lösungen sollten umgesetzt werden, um die Barrieren für Nutzer mit Farbsehschwäche zu überwinden? ',
      answerOptions: [
        {
          content: 'Verwendung von Graustufen zur Vermeidung von Farbkonflikten',
          isCorrect: false
        },
        {
          content: ' Kontrast zwischen Hintergrund und Vordergund von 7.5:1  ',
          isCorrect: false
        },
        {
          content: 'Farbe nicht als einzigen Informationsträger  verwenden',
          isCorrect: true
        },
        {
          content: 'Kontrast zwischen Hintergrund und Vordergund von 4.5:1  ',
          isCorrect: true
        },
      ],
      pointsToBeAwarded: 1},
  ]
}
