import { BarrierSimulationButton } from './barrier-simulation-button.model';

export interface BarrierData {
  id: string;
  name: string;
  explanation: string;
}

export interface SimulationTypeData {
  barriers: BarrierData[],
  urlSuffix: string;
  title: string;
}

export const simulationData: { [key: string]: SimulationTypeData } = {
  'visual': {
    barriers: [{
      name: 'Weitsichtigkeit',
      selected: false,
      explanation: 'Kleine Schrift und feine Details sind schwer lesbar, was das Erfassen von Inhalten auf der Webseite beeinträchtigt.',
      id: 'farsighted',
    } as unknown as BarrierSimulationButton,
      {
        name: 'Rot-Grün Farbenblindheit',
        selected: false,
        explanation: 'Rote und grüne Farbtöne lassen sich nur schwer unterscheiden, was das Erkennen von farblich codierten Informationen problematisch macht.',
        id: 'red-green-color-blindness'
      } as unknown as BarrierSimulationButton,
      {
        name: 'Totale Farbenblindheit',
        selected: false,
        explanation: 'Da alles in Graustufen wahrgenommen wird, sind Webseiten, die nur auf Farben zur Informationsvermittlung setzen, schwer verständlich.',
        id: 'absolute-color-blindness'
      } as unknown as BarrierSimulationButton,
      // {
      //   name: 'Grauer Star',
      //   selected: false,
      //   explanation: 'Das eingeschränkte Sichtfeld und das verschwommene Sehen erschweren es, alle Inhalte auf einer Webseite zu erfassen.',
      //   id: 'cataract'
      // } as unknown as BarrierSimulationButton,
      // {
      //   name: 'Tunnelblick',
      //   selected: false,
      //   explanation: 'Das periphere Sehen ist stark eingeschränkt, wodurch nur ein kleiner Teil der Webseite sichtbar ist und die Orientierung erschwert wird.',
      //   id: 'tunnelvision'
      // } as unknown as BarrierSimulationButton,
      {
        name: 'Totale Blindheit',
        selected: false,
        explanation: '',
        id: 'blindness'
      }
    ],
    urlSuffix: 'webshop',
    title: 'Visuell'
  },
  'auditory': {
    barriers: [
      {
        name: 'Taubheit',
        explanation: 'Betroffene können Geräusche nur dumpf oder gar nicht wahrnehmen. Sie sind auf andere Wahrnehmungskanäle wie z.B. Text angewiesen.',
        id: 'deafness'
      },
      {
        name: 'Taubblindheit',
        explanation: 'Taubblinde Personen sind sowohl auditiv als auch visuell eingeschränkt und benötigen spezielle Hilfsmittel, um ihre Umgebung wahrzunehmen.',
        id: 'deafness-and-blindness'
      },
      {
        name: 'Tinnitus',
        explanation: 'Ein Piepton übertönt andere Geräusche, wodurch es für Betroffene schwierig sein kann, andere Geräusche wahrzunehmen.',
        id: 'tinnitius'
      },
    ],
    urlSuffix: 'cookies',
    title: 'Auditiv'
  },
  'motor': {
    barriers: [
      {
        name: 'Parkinson',
        explanation: 'Die Motorik weist ein Zittern auf, wodurch präzise Auswahlen unmöglich erscheinen.',
        id: 'parkinson'
      },
      {
        name: 'Mobilitätseinschränkung der Hände',
        explanation: 'Mit dieser Einschränkung ist es ohne Hilfsmittel unmöglich, die Maus zu verwenden. Dadurch kann es schwierig sein, eine Webseite zu navigieren.',
        id: 'no-mouse'
      }
    ],
    urlSuffix: 'webshop',
    title: 'Motorisch'
  },
  'cognitive': {
    barriers: [
      {
        name: 'Konzentrationsschwäche',
        explanation: 'Die Konzentration kann nicht lange aufrecht erhalten werden & man wird durch andere Gedanken abgelenkt. Dadurch erscheint es schwierig, lange Texte oder überladene Webseiten wahrzunehmen.',
        id: ''
      },
      {
        name: 'Lese-Rechtschreib-Schwäche (LRS)',
        explanation: 'Lange Textblöcke erscheinen wie ein Wirrwar und sind dadurch schwer zu lesen.',
        id: ''
      }
    ],
    urlSuffix: 'lexipedia',
    title: 'Kognitiv'
  },
};
