import { BarrierSimulationButton } from './barrier-simulation-button.model';

export interface BarrierData {
  name: string;
  explanation: string;
  classToApply: string;
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
      classToApply: 'farsighted',
    } as unknown as BarrierSimulationButton,
      {
        name: 'Rot-Grün Farbenblindheit',
        selected: false,
        explanation: 'Rote und grüne Farbtöne lassen sich nur schwer unterscheiden, was das Erkennen von farblich codierten Informationen problematisch macht.',
        classToApply: 'red-green-color-blindness'
      } as unknown as BarrierSimulationButton,
      {
        name: 'Totale Farbenblindheit',
        selected: false,
        explanation: 'Da alles in Graustufen wahrgenommen wird, sind Webseiten, die nur auf Farben zur Informationsvermittlung setzen, schwer verständlich.',
        classToApply: 'absolute-color-blindness'
      } as unknown as BarrierSimulationButton,
      {
        name: 'Grauer Star',
        selected: false,
        explanation: 'Das eingeschränkte Sichtfeld und das verschwommene Sehen erschweren es, alle Inhalte auf einer Webseite zu erfassen.',
        classToApply: 'cataract'
      } as unknown as BarrierSimulationButton,
      {
        name: 'Tunnelblick',
        selected: false,
        explanation: 'Das periphere Sehen ist stark eingeschränkt, wodurch nur ein kleiner Teil der Webseite sichtbar ist und die Orientierung erschwert wird.',
        classToApply: 'tunnelvision'
      } as unknown as BarrierSimulationButton,
    ],
    urlSuffix: 'webshop',
    title: 'Visuell'
  },
  'auditory': {
    barriers: [
      {
        name: 'Taubheit',
        explanation: 'Betroffene können Geräusche nur dumpf oder gar nicht wahrnehmen. Sie sind auf andere Wahrnehmungskanäle wie z.B. Text angewiesen.',
        classToApply: 'deafness'
      },
      {
        name: 'Taubblindheit',
        explanation: 'Taubblinde Personen sind sowohl auditiv als auch visuell eingeschränkt und benötigen spezielle Hilfsmittel, um ihre Umgebung wahrzunehmen.',
        classToApply: 'deafness-and-blindness'
      },
      {
        name: 'Tinnitus',
        explanation: 'Ein Piepton übertönt andere Geräusche, wodurch es für Betroffene schwierig sein kann, andere Geräusche wahrzunehmen.',
        classToApply: 'tinnitius'
      },
    ],
    urlSuffix: 'cookies',
    title: 'Auditiv'
  },
  'motor': {
    barriers: [],
    urlSuffix: 'webshop',
    title: 'Motorisch'
  },
  'cognitive': {
    barriers: [],
    urlSuffix: 'lexipedia',
    title: 'Kognitiv'
  },
};
